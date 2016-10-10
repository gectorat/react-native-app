import React, { Component } from 'react';
import {
  View,
  Text,
  Container,
  Content,
  Title,
  Icon,
  Header
} from 'native-base';
import { Image,TouchableHighlight,TouchableWithoutFeedback,Modal,ScrollView } from 'react-native';
import Gallery from '../common/Gallery';
import styles from './styles';
export default class Card extends Component {
  constructor() {
    super();
    this.isLikedOnModal = this.isLikedOnModal.bind(this);
    this.isMovedOnModal = this.isMovedOnModal.bind(this);
  }
  isLikedOnModal() {
    this.props.setFullCardVisible();
    this.props.isLiked();
  }
  isMovedOnModal() { 
    this.props.setFullCardVisible();
    this.props.isMoved();
  }
  render() {
    return (
      <Modal visible={this.props.visible} animationType={'slide'}>
          <ScrollView style={this.props.stylesCard}>
              <Container style={styles.mainContainer}>
                <Content>
                  <View style={styles.headSection}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.name}>Ivan Dorohov</Text>
                        <Text style={styles.companyName}>Ciklum</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.name}></Text>
                        <Text style={styles.location}>Amosova 12</Text>
                    </View>
                  </View>
                  <View style={styles.bodySection}>
                    <View style={styles.title}>
                      <Text numberOfLines={2} style={{fontFamily: 'HelveticaNeue-Medium'}}>
                        {this.props.children.title}
                      </Text>
                    </View>
                    <View style={styles.body}>
                      <Text numberOfLines={10} style={{fontFamily: 'HelveticaNeue-Light'}}>
                        {this.props.children.body}
                      </Text>
                    </View>
                    <Gallery data={this.props.children.photos} />
                  </View>
                </Content>
              </Container>
              </ScrollView>
              <View style={{marginLeft: 10, marginRight: 10, flexDirection: 'row'}}>
                <Icon style={{flex: 0.4, color: "#4F8EF7"}} onPress={this.isLikedOnModal} name="ios-heart-outline" />
                <Icon style={{flex: 0.4, color: "#60938a"}} name="ios-chatboxes-outline" />
                <Icon style={{color: "#4F8EF7"}} onPress={this.isMovedOnModal} name="ios-paper-outline" />
              </View>
      </Modal>
    )
  }
}