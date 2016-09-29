
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, List, ListItem, InputGroup, Input, Button, Icon } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import { addItem } from '../../actions/list';
import styles from './styles';

const placeholder = {
  email: 'Email',
  subject: 'Subject',
  description: 'Description'
};

class NewItem extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    addItem: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
  }
  constructor(){
    super();
    this.state = { description: '' }
  }
  addNewRequest() {
    this.props.addItem(this.state.description);
  }
  updateDescription(description){
    this.setState({description});
  }
  popRoute() {
    this.props.popRoute();
  }

  render() {
    const { props: { name, index, list } } = this;

    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>Add new item</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <List>
            <ListItem>
              <InputGroup>
                <Input placeholder={placeholder.email}/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input placeholder={placeholder.subject}/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input
                  multiline
                  numberOfLines={5}
                  height={150}
                  value={this.state.description}
                  onChangeText={(e) => this.updateDescription(e)}
                  placeholder={placeholder.description}/>
              </InputGroup>
            </ListItem>
          </List>
          <Button block info onPress={()=>this.addNewRequest()}>Ask for advance</Button>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    addItem: (text) => dispatch(addItem(text)),
    popRoute: () => dispatch(popRoute()),
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    index: state.list.selectedIndex,
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(NewItem);
