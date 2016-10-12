import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Icon } from 'native-base';

class RegularTitle extends Component {

  static propTypes = {
    iconComponent: React.PropTypes.node,
    title: React.PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = { page: 'home' };
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 17,
          }}
        >
          { this.props.title || 'Default Title'}
        </Text>
      </View>
    );
  }
}

export default RegularTitle;
