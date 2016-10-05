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
import { Image,TouchableHighlight } from 'react-native';
import Gallery from '../common/Gallery';
import styles from './styles';
export default class Card extends Component {
  render() {
    return (
      <View style={[this.props.stylesCard, {width: 0.9 * this.props.width, 
        height: 0.85 * this.props.height, 
        borderRadius: 8,  borderWidth: 1.5, borderColor: '#d6d7da', backgroundColor: '#fff'}]}>
          <Container style={styles.mainContainer}>
            <Content>
              <View style={[styles.headSection, {width: 0.8*this.props.width}]}>
                <View>
                  <Text style={styles.name}>Ivan Dorohov</Text>
                </View>
                <View>
                  <Text style={styles.companyName}>Ciklum</Text>
                </View>
              </View>
              <View style={styles.bodySection}>
                <View style={styles.title}>
                  <Text style={{fontFamily: 'HelveticaNeue-Medium'}}>
                    Продам автомобиль Peugeot 207 + 2 комплекта резины
                  </Text>
                </View>
                <View style={styles.body}>
                  <Text style={{fontFamily: 'HelveticaNeue-Light'}}>
                    Продам свой автомобиль Peugeot 207. Машинка на ходу, обсуживалась на фирменном СТО.
                    Достаточно просторный салон, есть все необходимое для комфортной езды. 
                    Есть 2 комплекта резины, сигнализация, центральный замок и задние парктроники.
                  </Text>
                </View>
                
                  <Gallery data={['https://upload.wikimedia.org/wikipedia/commons/4/47/2012_Peugeot_207_(A7_Series_II_MY11)_XT_5-door_hatchback_(2015-06-08).jpg',
                  'https://i.ytimg.com/vi/nit-3xVAIps/maxresdefault.jpg',
                  'https://i.ytimg.com/vi/Sjn92OLm9io/maxresdefault.jpg',
                  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Peugeot_207_3-T%C3%BCrer_front.JPG']} />
              </View>
            </Content>
          </Container>
          <View style={{marginLeft: 10, marginRight: 10, flexDirection: 'row'}}>
            <Icon style={{flex: 0.4, color: "#60938a"}} name="ios-star-outline" />
            <Icon style={{flex: 0.4, color: "#60938a"}} name="ios-chatboxes-outline" />
            <Icon style={{color: "#60938a"}} name="ios-redo-outline" />
          </View>
      </View>
    )
  }
}