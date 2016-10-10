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
import { Image,TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import Gallery from '../common/Gallery';
import FullCard from './fullCard';
import styles from './styles';
export default class Card extends Component {
  constructor() {
    super();
    this.state = {visible: false}
    this.setFullCardVisible = this.setFullCardVisible.bind(this);
  }
  setFullCardVisible() {
    if (this.state.visible) {
      this.setState({visible: false});
    } else {
      this.setState({visible: true});
    }
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.setFullCardVisible}>
        <View>
          <View style={[this.props.stylesCard, {width: 0.9 * this.props.width, 
            height: 0.85 * this.props.height, 
            borderRadius: 8,  borderWidth: 1.5, borderColor: '#d6d7da', backgroundColor: '#fff'}]}>
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
                        Продам автомобиль Peugeot 207 + 2 комплекта резины
                      </Text>
                    </View>
                    <View style={styles.body}>
                      <Text numberOfLines={10} style={{fontFamily: 'HelveticaNeue-Light'}}>
                      {this.props.data}
                        Продам свой автомобиль Peugeot 207. Машинка на ходу, обсуживалась на фирменном СТО.
                        Достаточно просторный салон, есть все необходимое для комфортной езды. 
                        Есть 2 комплекта резины, сигнализация, центральный замок и задние парктроники.
                      </Text>
                    </View>
                    <Gallery data={['https://upload.wikimedia.org/wikipedia/commons/4/47/2012_Peugeot_207_(A7_Series_II_MY11)_XT_5-door_hatchback_(2015-06-08).jpg',
                      'https://i.ytimg.com/vi/nit-3xVAIps/maxresdefault.jpg',
                      'https://i.ytimg.com/vi/Sjn92OLm9io/maxresdefault.jpg',
                      'https://upload.wikimedia.org/wikipedia/commons/c/cc/Peugeot_207_3-T%C3%BCrer_front.JPG',
                      'https://i.ytimg.com/vi/Sjn92OLm9io/maxresdefault.jpg',
                      'https://upload.wikimedia.org/wikipedia/commons/c/cc/Peugeot_207_3-T%C3%BCrer_front.JPG']} />
                  </View>
                </Content>
              </Container>
              <View style={{marginLeft: 10, marginRight: 10, flexDirection: 'row'}}>
                <Icon style={{flex: 0.4, color: "#4F8EF7"}} onPress={this.props.isLiked} name="ios-heart-outline" />
                <Icon style={{flex: 0.4, color: "#4F8EF7"}} name="ios-chatboxes-outline" />
                <Icon style={{color: "#4F8EF7"}} onPress={this.props.isMoved} name="ios-paper-outline" />
              </View>
          </View>
          <FullCard 
            isLiked={this.props.isLiked}
            isMoved={this.props.isMoved} 
            setFullCardVisible={this.setFullCardVisible} 
            visible={this.state.visible}/>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}