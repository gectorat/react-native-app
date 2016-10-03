
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import { View as RawView } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Title,
  Content,
  Tabs,
  Text,
  Card,
  CardItem,
  Grid,
  Col,
  Row,
  Button,
  View,
  InputGroup,
  Input,
  Icon } from 'native-base';
import NoItems from '../common/NoItemContentMsg';
import { openDrawer, closeDrawer } from '../../actions/drawer';
import { replaceRoute, replaceOrPushRoute } from '../../actions/route';
import { setIndex } from '../../actions/list';
import { syncPosts, fetchPosts } from '../../actions/post';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
    setIndex: React.PropTypes.func,
    name: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
  }

  componentDidMount() {
    // this.props.fetchPosts();
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  navigateTo(route, index) {
    this.props.closeDrawer();
    this.props.setIndex(index);
    this.props.replaceOrPushRoute(route);
  }

  render() {
    const { posts, isEditing } = this.props.posts;
    const { syncPosts } = this.props;

    return (
      <Container theme={myTheme} style={styles.container}>
        <Header searchBar regular>
          <InputGroup>
            <Icon name='ios-search' />
            <Input placeholder='Search in All' height={32} />
            <Icon name='ios-archive-outline' />
          </InputGroup>
          <Button transparent>
            Search
          </Button>
        </Header>
        <Content style={{backgroundColor:'#000'}}>
          <Tabs>
            <View tabLabel='Home'>
              <RawView style={{backgroundColor:'#000'}}>
                <Card>
                  <CardItem>
                    <Text>
                      NativeBase is a free and open source framework that enables
                      developers to build high-quality mobile apps using React Native
                      iOS and Android apps with a fusion of ES6.
                    </Text>
                  </CardItem>
                </Card>

                <Card>
                  <CardItem>
                    <Text>
                      NativeBase is a free and open source framework that enables
                      developers to build high-quality mobile apps using React Native
                      iOS and Android apps with a fusion of ES6.
                    </Text>
                  </CardItem>
                </Card>

                <Card>
                  <CardItem>
                    <Text>
                      NativeBase is a free and open source framework that enables
                      developers to build high-quality mobile apps using React Native
                      iOS and Android apps with a fusion of ES6.
                    </Text>
                  </CardItem>
                </Card>

                <Card>
                  <CardItem>
                    <Text>
                      NativeBase is a free and open source framework that enables
                      developers to build high-quality mobile apps using React Native
                      iOS and Android apps with a fusion of ES6.
                    </Text>
                  </CardItem>
                </Card>

              </RawView>
            </View>

            <View tabLabel="Menu">
              <RawView style={{backgroundColor:'#000'}}>
                <Card>
                  <CardItem cardBody>
                    <Text>
                      NativeBase is a free and open source framework that enables
                      developers to build high-quality mobile apps using React Native
                      iOS and Android apps with a fusion of ES6.
                    </Text>
                  </CardItem>

                  <CardItem header>
                    <Icon name='ios-eye'></Icon>
                    <Text>315</Text>
                    <Icon name='ios-heart'></Icon>
                    <Text>315</Text>

                  </CardItem>
                </Card>
              </RawView>
              <RawView style={{backgroundColor:'#000'}}>
                <Card>
                  <CardItem header>
                    <Icon name='ios-people'></Icon>
                    <Text>Card Header</Text>
                  </CardItem>
                  <CardItem cardBody>
                    <Text>
                      NativeBase is a free and open source framework that enables
                      developers to build high-quality mobile apps using React Native
                      iOS and Android apps with a fusion of ES6.
                    </Text>

                    <RawView style={{
                      flex: 1,
                      flexDirection:'row',
                      alignItems:'stretch',
                      justifyContent:'space-between'
                    }}>
                      <Button transparent><Icon name='ios-heart'></Icon> 315</Button>
                      <Button transparent><Icon name='ios-medical'></Icon></Button>
                      <Button transparent><Icon name='ios-log-out'></Icon> 315</Button>
                    </RawView>
                  </CardItem>
                </Card>

              </RawView>
            </View>
          </Tabs>
        </Content>
      </Container>
    );
  }
}
function bindAction(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    syncPosts: () => dispatch(syncPosts()),
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: () => dispatch(closeDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
    setIndex: index => dispatch(setIndex(index)),
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    posts: state.posts,
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(Home);
