
import React, { Component } from 'react';
import { TouchableOpacity, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  View,
  Header,
  Title,
  Content,
  Text,
  Button,
  List,
  ListItem,
  Icon } from 'native-base';
import NoItems from '../common/NoItemContentMsg';
import { openDrawer, closeDrawer } from '../../actions/drawer';
import { replaceRoute, replaceOrPushRoute } from '../../actions/route';
import { setIndex } from '../../actions/list';
import { syncPosts, fetchPosts } from '../../actions/post';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import Swiper from '../swipeCards/swiper';
import Card from '../swipeCards/card';

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

  handleYup (card) {
    console.log(`YES`)
  }

  handleNope (card) {
    console.log(`NO`)
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
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.replaceRoute('login')}>
            <Icon name="ios-power" />
          </Button>
          <Button transparent onPress={() => this.props.fetchPosts()}>
            <Icon name="ios-refresh" />
          </Button>
          <Button transparent onPress={() => this.navigateTo('newItem')}>
            <Icon name="ios-add-circle-outline" />
          </Button>

          <Title>{(this.props.name) ? this.props.name : 'Home'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>
        <Content>
          <Swiper
            containerStyle={styles.cardContainer}
            cards={this.state.list}
            renderCard={(cardData) => <Card  stylesCard={styles.card} data={cardData} />}
            renderNoMoreCards={() => <NoMoreCards />}
            handleYup={this.handleYup}
            handleNope={this.handleNope}
          />
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
