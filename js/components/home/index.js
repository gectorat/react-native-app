
import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  View,
  Header,
  Title,
  Content,
  Text,
  Button,
  Card,
  CardItem,
  DeckSwiper
  Icon } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import { replaceRoute, replaceOrPushRoute } from '../../actions/route';
import { setIndex } from '../../actions/list';
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

  constructor(props) {
    super();
    this.dismissListItem = this.dismissListItem.bind(this);
    this.state = { list: props.list };
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  navigateTo(route, index) {
    this.props.closeDrawer();
    this.props.setIndex(index);
    this.props.replaceOrPushRoute(route);
  }

  dismissListItem(index) {
    let list = this.state.list;

    this.setState({list: [
      ...list.slice(0, index),
      ...list.slice(index + 1)
    ]});
  }

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.replaceRoute('login')}>
            <Icon name="ios-power" />
          </Button>

          <Title>{(this.props.name) ? this.props.name : 'Home'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>
        <Content>
          {this.state.list.length === 0 ?
            <Grid>
              <Row>
                <Col height={300}></Col>
              </Row>
              <Row>
                <Col>
                  <Button block transparent warning>No Items</Button>
                </Col>
              </Row>
            </Grid> : null}
          {this.state.list.map((item, i) =>
          <Card key={i}>
            <CardItem cardBody>
              <Image style={{ width:128, height:128 }} source={{ uri:'https://placehold.it/128.png' }}></Image>
              <Text>{item}</Text>
            </CardItem>
            <CardItem>
              <Button
                style={{marginRight:10}}
                onPress={() => {}}>
                Ok
              </Button>
              <Button
                style={{marginRight:10}}
                onPress={() => {
                  this.dismissListItem(i);
                }}>
                Dismiss
              </Button>
            </CardItem>
          </Card>
          )}
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
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
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(Home);
