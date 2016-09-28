
import React, { Component } from 'react';
import { Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, InputGroup, Input, Button, Icon, View } from 'native-base';

import { replaceRoute } from '../../actions/route';
import { setUser } from '../../actions/user';
import styles from './styles';

const background = require('../../../images/shadow.png');

class Login extends Component {

  static propTypes = {
    setUser: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '@ciklum.com',
    };
    this.validateForm = this.validateForm.bind(this);
  }

  setUser(name) {
    this.props.setUser(name);
  }

  validateForm(e) {
    if (this.state.name === '') return;
    let domain = this.state.name.split('@')[1]
    if(domain === 'ciklum.com') {
      this.replaceRoute('home')
    } else {
      Alert.alert('Unable to login', 'Your account cannot be used');
      this.setState({name:''});
    }
  }

  replaceRoute(route) {
    this.setUser(this.state.name);
    this.props.replaceRoute(route);
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <Image source={background} style={styles.shadow}>
              <View style={styles.bg}>
                <InputGroup style={styles.input}>
                  <Icon name="ios-person" />
                  <Input placeholder="EMAIL" value={this.state.name} onChangeText={name => this.setState({ name })} />
                </InputGroup>
                <InputGroup style={styles.input}>
                  <Icon name="ios-unlock-outline" />
                  <Input
                    placeholder="PASSWORD"
                    secureTextEntry
                  />
                </InputGroup>
                <Button style={styles.btn} onPress={this.validateForm}>
                  Login
                </Button>
              </View>
            </Image>
          </Content>
        </View>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    replaceRoute: route => dispatch(replaceRoute(route)),
    setUser: name => dispatch(setUser(name)),
  };
}

export default connect(null, bindActions)(Login);
