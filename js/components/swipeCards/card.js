import React, { Component } from 'react';
import {
  View,
  Text
} from 'native-base';
const Card = React.createClass({
  render() {
    return (
      <View style={[this.props.stylesCard, {backgroundColor: 'red'}]}>
        <Text>{this.props.data}</Text>
      </View>
    )
  }
})
export default Card