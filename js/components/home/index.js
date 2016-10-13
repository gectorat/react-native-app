
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import Dimensions from 'Dimensions';

import NoItems from '../common/NoItemContentMsg';
import myTheme from '../../themes/base-theme';
import { syncPosts, fetchPosts } from '../../actions/post';
import styles from './styles';
import Swiper from '../swipeCards/swiper';
import Card from '../swipeCards/card';

class Home extends Component {

  static propTypes = {
    fetchPosts: React.PropTypes.func,
    syncPosts: React.PropTypes.func,
    name: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.object),
  }

  constructor(props) {
    super(props);
    this.state = { posts: props.posts, page: 'home' };
  }

  componentDidMount() {
    const db = firebase.database();
    const ref = db.ref('posts');
    ref.on('value', snapshot => {
      // this.state({list: snapshot.val()})
      this.props.fetchPosts();
    }, errorObject => console.log(`The read failed: ${errorObject.code}`));

    this.props.fetchPosts();
  }

  handleYup() {
    console.log('YES');
  }

  handleNope() {
    console.log('NO');
  }

  render() {
    const { height, width } = Dimensions.get('window');
    const swiper = (
      <Swiper
        containerStyle={styles.cardContainer}
        cards={this.props.posts}
        renderCard={cardData => (
          <Card
            width={width}
            height={height}
            stylesCard={styles.card}
            data={cardData}
          />
        )}
        renderNoMoreCards={() => <NoItems><Text>No More Cards</Text></NoItems>}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
      >
      test
      </Swiper>);

    const mainContent = this.state.page === 'home' ? swiper : (<Text>Not A Home</Text>);

    return (
      <View style={{ flex: 1 }} theme={myTheme} >
        <View style={{ flex: 1 }}>
          {mainContent}
        </View>
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    syncPosts: () => dispatch(syncPosts()),
    fetchPosts: () => dispatch(fetchPosts()),
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    posts: state.posts.posts,
    list: state.posts.posts,
  };
}

export default connect(mapStateToProps, bindAction)(Home);
