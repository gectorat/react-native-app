
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, List, ListItem, InputGroup, Input, Button } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import { createPost } from '../../actions/post';
import styles from './styles';

import { v1 } from 'react-native-uuid';

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
    const { title, body } = this.state;
    this.props.createPost({ id: v1(), timestamp: +new Date, title, body});
  }

  updateDescription(body){
    this.setState({body});
  }

  updateTitle(title){
    this.setState({title});
  }

  popRoute() {
    this.props.popRoute();
  }

  render() {
    const { props: { name, index, list } } = this;
    return (
      <View>
        <List>
          <ListItem>
            <InputGroup>
              <Input placeholder={placeholder.email}/>
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Input
                value={this.state.title}
                onChangeText={(e) => this.updateTitle(e)}
                placeholder={placeholder.subject}/>
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Input
                multiline
                numberOfLines={5}
                height={150}
                value={this.state.body}
                onChangeText={(e) => this.updateDescription(e)}
                placeholder={placeholder.description}/>
            </InputGroup>
          </ListItem>
        </List>
        <Button block info onPress={()=>this.addNewRequest()}>Ask for advance</Button>
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    createPost: (data) => dispatch(createPost(data)),
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
