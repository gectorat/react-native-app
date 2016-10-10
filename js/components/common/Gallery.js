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
import { Image,TouchableHighlight,ScrollView } from 'react-native';
import ImagePreview from './ImagePreviewer';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {preview: false, source: 'https://facebook.github.io/react/img/logo_og.png'}
    this.previewImage = this.previewImage.bind(this);
  }
  previewImage(e) {
    if (this.state.preview) {
      this.setState({preview: false})
    } else {
      this.setState({preview: true})
    }
  }
  render() {
    if (!this.props.data) {
      return null;
    }
    const Preview = <ImagePreview setVisible={this.previewImage} visible={this.state.preview} source={{uri: this.state.source}}/>;
    const Gallery = this.props.data.map((imageUrl,imageIndex) => 
        <TouchableHighlight key={imageIndex} onPress={() => this.setState({source: imageUrl, preview: true})}>
          <Image style={{width: 70, marginRight: 3, height: 70}} ref='image' source={{uri: imageUrl}}/>
        </TouchableHighlight>
      )
    return <ScrollView horizontal={true} style={{marginTop: 60, flexDirection: 'row',borderWidth: 2.5, borderColor: '#d6d7da', backgroundColor: '#fff'}}>
            {Gallery}
            {Preview}
          </ScrollView>;
  }
}