import React, { Component } from 'react';
import { View as RawView } from 'react-native';
import { connect } from 'react-redux';

import Tabs from 'react-native-tabs';

import {
  Header,
  Icon } from 'native-base';

export default class HeaderNavigator extends Component {
  
  render() {
    return (
      <Header>
        <Tabs selected={this.props.page} style={styles.tabview}
          onSelect={el=>this.props.navigateTo(el.props.tabname)}>
          <Icon style={styles.tabitem} tabname="nav.home" name="ios-home"/>
          <Icon style={styles.tabitem} tabname="nav.create" name="ios-create"/>
          <Icon style={styles.tabitem} tabname="nav.cards" name="ios-paper"/>
          <Icon style={styles.tabitem} tabname="open.drawer" name="ios-list"/>
        </Tabs>
      </Header>
    )
  }
}

const styles = {
  tabview: { height: 42, backgroundColor: 'transparent'},
  tabitem: { color: '#333'},
}
