import React, { Component } from 'react';
import {
  Text,
  Icon,
  CardItem,
  } from 'native-base';

class CardHeader extends Component {

  render() {
    const { iconName, title, children} = this.props;
    return (
        (children ? (<CardItem header>{children}</CardItem>) :
          (<CardItem header>
            {iconName && (<Icon name={this.props.iconName}></Icon>)}
            {title && (<Text>{this.props.title}</Text>)}
          </CardItem>)
        ));
  }
}
export default CardHeader;
