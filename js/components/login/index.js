import React, { Component } from 'react';
import { Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import { InputGroup, Input, Button, Icon, Text, View } from 'native-base';
import firebase from 'firebase';
import { setUser } from '../../actions/user';
import styles from './styles';

const background = require('../../../images/shadow.png');

class Login extends Component {

  static propTypes = {
    setUser: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: 'zhs@ciklum.com',
      password: 'password'
    };
    this.validateForm = this.validateForm.bind(this);
  }

  setUser(name) {
    this.props.setUser(name);
  }

  validateForm() {
    if (this.state.name === '') return;
    const domain = this.state.name.split('@')[1];
    if (domain === 'ciklum.com') {
      firebase.auth()
      .signInWithEmailAndPassword(this.state.name, this.state.password)
      .then((user) => {
        if (user.emailVerified) {
          this.replaceRoute('home');
          this.setState({ verificationPending: false });
        } else if (this.state.verificationPending) {
          Alert.alert('Email Verification', 'Please check your email to complete registration process');
        } else {
          Alert.alert(
            'Alert Title',
            'Account isn\'t verified. Click ok to send verification email ',
            [
              { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
              { text: 'OK',
                onPress: () => {
                  console.log('OK Pressed');
                  user.sendEmailVerification();
                  this.setState({ verificationPending: true });
                },
              },
            ]
          );
        }
      });

    } else {
      Alert.alert('Unable to login', 'Your account cannot be used');
      this.setState({
        name: '',
      });
    }
  }

  render() {
    return (
      <View>
        <Image source={background} style={styles.shadow}>
          <View style={styles.bg}>
            <InputGroup style={styles.input}>
              <Icon name="ios-person" />
              <Input
                placeholder="EMAIL"
                value={this.state.name}
                onChangeText={name => this.setState({ name })} />
            </InputGroup>
            <InputGroup style={styles.input}>
              <Icon name="ios-unlock-outline" />
              <Input
                placeholder="PASSWORD"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                secureTextEntry
              />
            </InputGroup>
            {this.state.verificationPending ?
              <InputGroup style={styles.input}>
                <Icon name="ios-unlock-outline" />
                <Text>Check your email for confirmation link, then try login again</Text>
              </InputGroup>
            : null }
            <Button style={styles.btn} onPress={this.validateForm}>
              Login
            </Button>
          </View>
        </Image>
      </View>
    );
  }
}

function bindActions(dispatch) {
  return {
    setUser: name => dispatch(setUser(name)),
  };
}

export default connect(null, bindActions)(Login);
