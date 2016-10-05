import React, { Component } from 'react';
import {
  Text,
  Card,
  CardItem,
  } from 'native-base';

import CardHeader from './CardHeader';
import CardActionMenu from './ActionMenu';

class TabCard extends Component {

  render() {
    const { header, footer, actionMenu} = this.props;
    return (
      <Card>
        { header && (
          <CardHeader {...header}/>
        )}
        <CardItem cardBody>
          <Text>
            {this.props.children}
          </Text>
        </CardItem>
        { footer && (
          <CardHeader {...footer}/>
        )}
        {actionMenu && (
          <CardActionMenu/>
        )}
      </Card>);
  }
}
export default TabCard
