import React, { Component } from 'react';
import {
  View,
  Text,
  Container,
  Content,
  Title,
  Header
} from 'native-base';
import { Image } from 'react-native';
import Lightbox from 'react-native-lightbox';
import styles from './styles';

const background = require('../../../images/shadow.png');
const Card = React.createClass({
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
                <Lightbox>
                  <Image
                    style={{ height: 140, width: 100 }}
                    source={background}
                  />
                </Lightbox>
              </View>
            </Content>
          </Container>
      </View>
    )
  }
})
export default Card