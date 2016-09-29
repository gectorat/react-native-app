
import React, { Component } from 'react';
import { TouchableOpacity, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  View,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon } from 'native-base';
import NoItems from '../common/NoItemContentMsg';
import { openDrawer, closeDrawer } from '../../actions/drawer';
import { replaceRoute, replaceOrPushRoute } from '../../actions/route';
import { setIndex } from '../../actions/list';
import myTheme from '../../themes/base-theme';
import styles from './styles';
const Cards = [
  {text: 'Tomato', backgroundColor: 'red'},
  {text: 'Aubergine', backgroundColor: 'purple'},
  {text: 'Courgette', backgroundColor: 'green'},
  {text: 'Blueberry', backgroundColor: 'blue'},
  {text: 'Umm...', backgroundColor: 'cyan'},
  {text: 'orange', backgroundColor: 'orange'},
]
let Card = React.createClass({
  render() {
    return (
      <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
})
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

  constructor(props) {
    super();
    this.dismissListItem = this.dismissListItem.bind(this);
    this.state = { list: props.list, cards: Cards };
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
    this.props.closeDrawer();
    this.props.setIndex(index);
    this.props.replaceOrPushRoute(route);
  }

  dismissListItem(index) {
    let list = this.state.list;

    this.setState({list: [
      ...list.slice(0, index),
      ...list.slice(index + 1)
    ]});
  }

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.replaceRoute('login')}>
            <Icon name="ios-power" />
          </Button>
          <Button transparent onPress={() => this.navigateTo('newItem')}>
            <Icon name="ios-add-circle-outline" />
          </Button>

          <Title>{(this.props.name) ? this.props.name : 'Home'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>
        <Content>
          {this.state.list.length === 0 ?
            <NoItems>Empty</NoItems> : null}
          {this.state.list.map((item, i) =>
          <List key={i}>
            <ListItem button onPress={()=>Alert.alert('Text',item)}>
              <Text>{item}</Text>
            </ListItem>
          </List>
          )}
        </Content>
      </Container>
    );
  }
}
function bindAction(dispatch) {
  return {
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
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(Home);
