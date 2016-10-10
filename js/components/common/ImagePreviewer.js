import React, {Component} from 'react';
import { Modal, View, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  image: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  }
});

export default class ImageZoom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {source} = this.props;
    return <Modal
        animationType={'fade'}
        transparent={true}
        onRequestClose={this.props.setVisible}
        visible={this.props.visible}>
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={this.props.setVisible}>
          <Image resizeMode={'contain'} source={source} style={styles.image} />
        </TouchableWithoutFeedback>
      </View>
    </Modal>;
  }
}

ImageZoom.propTypes = {
  source: React.PropTypes.object
};

