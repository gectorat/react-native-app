import React, { Component } from 'react';
import { View } from 'react-native';
import { Title, Button, Icon } from 'native-base';
import { Header as _Header } from 'native-base';

import { connect } from 'react-redux';
import { replaceRoute, popRoute, replaceOrPushRoute } from '../../../actions/route';

class Header extends _Header {

  static propTypes = {
    popRoute: React.PropTypes.func,
  }

  popRoute() {
    this.props.popRoute();
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
      <View style={{ flex: 1}}>
        <Button transparent onPress={() => this.popRoute()}>
          <Icon name="ios-arrow-back" />
        </Button>
        <Title>{this.props.title}</Title>
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: () => dispatch(closeDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    popRoute: () => dispatch(popRoute()),
    replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
  };
}

function mapStateToProps(state) {
  return {
  };
}

export default Header;
// export default connect(mapStateToProps, bindAction)(Header);
