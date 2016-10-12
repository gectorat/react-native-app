import React, { Component } from 'react';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import Tabs from 'react-native-tabs';

import { replaceRoute, replaceOrPushRoute } from '../../actions/route';

class HomeTabs extends Component {

  static propTypes = {
    replaceRoute: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = { page: 'home' };
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  navigateTo(route) {
    this.props.replaceOrPushRoute(route);
  }

  render() {
    return (
      <Tabs
        selected={this.state.page}
        style={{ flex: 1 }}
        pressOpacity={1}
        onSelect={el => this.navigateTo(el.props.tabname)}
      >
        <Icon tabname="home" name="ios-home" />
        <Icon tabname="card.create" name="ios-create" />
        <Icon tabname="card.list" name="ios-paper" />
        <Icon tabname="home.drawer" name="ios-list" />
      </Tabs>
    );
  }
}

function bindAction(dispatch) {
  return {
    replaceRoute: route => dispatch(replaceRoute(route)),
    replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
  };
}

function mapStateToProps() {
  return {};
}

export default connect(null, bindAction)(HomeTabs);
