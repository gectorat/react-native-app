import React, { Component } from 'react';
import { Icon, Text, View} from 'native-base';
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
              <View style={styles.mainContainer}>
                <View>
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
                </View>
              </View>
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
            visible={this.state.visible}>{this.props.children}</FullCard>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}