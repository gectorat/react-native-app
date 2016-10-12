
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, BackAndroid, StyleSheet } from 'react-native';
import CodePush from 'react-native-code-push';
import { Container, Content, Text, View } from 'native-base';  // @TODO remove
import Modal from 'react-native-modalbox';
import { ExNavigator } from 'react-native-autopilot';

// import AppNavigator from './AppNavigator';
import navigation from './actions/navigation';
import ProgressBar from './components/loaders/ProgressBar';
import { mapRoute } from './routes';
import theme from './themes/base-theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal1: {
    height: 300,
  },
});

class App extends Component {

  constructor(props) {
    super(props);
    this.mapRouteWithProps = route => mapRoute(this.props, route);
    this.state = {
      showDownloadingModal: false,
      showInstalling: false,
      downloadProgress: 0,
    };
  }

  componentDidMount() {
    const navigator = this.navigator;

    CodePush.sync({ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE },
      (status) => {
        switch (status) {
          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            this.setState({ showDownloadingModal: true });
            this._modal.open();
            break;
          case CodePush.SyncStatus.INSTALLING_UPDATE:
            this.setState({ showInstalling: true });
            break;
          case CodePush.SyncStatus.UPDATE_INSTALLED:
            this._modal.close();
            this.setState({ showDownloadingModal: false });
            break;
          default:
            break;
        }
      },
      ({ receivedBytes, totalBytes }) => {
        this.setState({ downloadProgress: (receivedBytes / totalBytes) * 100 });
      }
    );

    if (Platform.OS === 'android' && !this.backButtonListener) {
      this.backButtonListener = () => {
        if (this.props.routes.length > 1) {
          this.props.popNavigationRoute();
          return true;
        }

        return false;
      };
      BackAndroid.addEventListener('hardwareBackPress', this.backButtonListener);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener(this.backButtonListener);
      this.backButtonListener = null;
    }
  }

  render() {
    const { routes, setNavigationRoutes } = this.props;
    if (this.state.showDownloadingModal) {
      return (
        <Container theme={theme} style={{ backgroundColor: theme.defaultBackgroundColor }}>
          <Content style={styles.container}>
            <Modal
              style={[styles.modal, styles.modal1]}
              backdrop={false}
              ref={(c) => { this._modal = c; }}
              swipeToClose={false}
            >
              <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', padding: 20 }}>
                {this.state.showInstalling ?
                  <Text style={{ color: theme.brandPrimary, textAlign: 'center', marginBottom: 15, fontSize: 15 }}>
                    Installing update...
                  </Text> :
                  <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', padding: 20 }}>
                    <Text style={{ color: theme.brandPrimary, textAlign: 'center', marginBottom: 15, fontSize: 15 }}>
                      Downloading update... {`${parseInt(this.state.downloadProgress, 10)} %`}
                    </Text>
                    <ProgressBar color="theme.brandPrimary" progress={parseInt(this.state.downloadProgress, 10)} />
                  </View>
                }
              </View>
            </Modal>
          </Content>
        </Container>
      );
    }

    return (
      <ExNavigator
        ref={(c) => { this.navigator = c; }}
        routes={routes}
        sceneStyle={{ paddingTop: 64 }}
        routeMapping={this.mapRouteWithProps}
        persistRoutes={setNavigationRoutes}
      />);
  }
}

const mapStateToProps = state => ({
  routes: state.route.routes,
});

App.propTypes = {
  routes: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  setNavigationRoutes: React.PropTypes.func.isRequired,
  popNavigationRoute: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, navigation)(App);
