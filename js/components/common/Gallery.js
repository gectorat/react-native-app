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
import ImagePreview from './ImagePreviewer';
// import styles from './styles';
export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {preview: false}
    this.previewImage = this.previewImage.bind(this);
  }
  previewImage(e) {
    if (this.state.preview) {
      this.setState({preview: false, source: e.target})
    } else {
      this.setState({preview: true})
    }
  }
  render() {
    const Preview = <ImagePreview setVisible={this.previewImage} visible={this.state.preview} source={{uri: this.state.source || ''}}/>;
    const Gallery = this.props.data.map((imageUrl,imageIndex) => 
        <TouchableHighlight key={imageIndex} onPress={() => this.setState({source: imageUrl, preview: true})}>
          <Image style={{width: 70, marginRight: 3, height: 70}} ref='image' source={{uri: imageUrl}}/>
        </TouchableHighlight>
      )
    return <View style={{marginTop: 120, flexDirection: 'row',borderWidth: 2.5, borderColor: '#d6d7da', backgroundColor: '#fff'}}>
            {Gallery}
            {Preview}
          </View>;
  }
}