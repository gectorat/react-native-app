
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Tabs from 'react-native-tabs';

import {
  Container,
  View,
  Content,
  Header,
  Icon,
  Text } from 'native-base';

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
  constructor(){
    super();

    this.state = {page: 'nav.home'};
  }
  componentDidMount() {
    if (this.props.drawerState === 'opened') {
      this.props.openDrawer()
    }
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
    if (route === 'open.drawer') {
      this.props.openDrawer();
    } else {
      this.props.closeDrawer();
      this.props.setIndex(index);
      this.props.replaceOrPushRoute(route);
    }
  }

  render() {
    const swiper = (
      <Swiper
        containerStyle={styles.cardContainer}
        cards={this.props.list}
        renderCard={(cardData) => <Card stylesCard={styles.card} data={cardData} />}
        renderNoMoreCards={() => <NoItems/>}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
      />);
      const mainContent = this.state.page === 'nav.home' ? swiper : (<Text>Not A Home</Text>)
    return (
      <Container>
        <Header>
          <Tabs
            selected={this.state.page}
            style={styles.tabview}
            onSelect={el=>this.navigateTo(el.props.tabname)}>
            <Icon style={styles.tabitem} tabname="nav.home" name="ios-home"/>
            <Icon style={styles.tabitem} tabname="nav.create" name="ios-create"/>
            <Icon style={styles.tabitem} tabname="nav.cards" name="ios-paper"/>
            <Icon style={styles.tabitem} tabname="open.drawer" name="ios-list"/>
          </Tabs>
        </Header>

        <Content>
          {mainContent}
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
