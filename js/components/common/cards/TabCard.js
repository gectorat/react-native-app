import React, { Component } from 'react';
import {
  Text,
  Card,
  CardItem,
  } from 'native-base';

class TabCard extends Component {

  render() {
    return (
      <Card>
        <CardItem>
          <Text>
            {this.props.children}
          </Text>
        </CardItem>
      </Card>);
  }
}
export default TabCard
