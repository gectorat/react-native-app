import React, { Component } from 'react';
import View from 'react-native';
import {
  Icon,
  CardItem,
  Button
  } from 'native-base';

import CardHeader from './CardHeader';
import myTheme from '../../../themes/base-theme';

class ActionMenu extends Component {

  render() {
    return (
      <CardHeader>
        <Button transparent>
          <Icon name='ios-heart'/>
          &nbsp;315
        </Button>
        <Button transparent>
          <Icon name='ios-medical'/>
          &nbsp;
        </Button>
        <Button transparent>
          <Icon name='ios-log-out'/>
          &nbsp;315
        </Button>
      </CardHeader>
    );
  }
}

const styles = { wrapper: {
    flex: 1,
    flexDirection:'row',
    alignItems:'stretch',
    justifyContent:'space-between'
  }
};

export default ActionMenu;
