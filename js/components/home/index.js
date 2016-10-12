
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal  } from 'react-native';
import { connect } from 'react-redux';
import Dimensions from 'Dimensions';

import NoItems from '../common/NoItemContentMsg';
import myTheme from '../../themes/base-theme';
import { syncPosts, fetchPosts } from '../../actions/post';
import styles from './styles';
import Swiper from '../swipeCards/swiper';

class Home extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
    setIndex: React.PropTypes.func,
    name: React.PropTypes.string,
    // list: React.PropTypes.arrayOf(React.PropTypes.string),
  }

  constructor(props) {
    super(props);
    this.state = { list: props.list, page: 'home' };
  }

  componentDidMount() {
    var db = firebase.database();
    var ref = db.ref("posts");
    ref.on("value", function(snapshot) {
      // this.state({list: snapshot.val()})
      // this.props.fetchPosts();
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
    this.props.fetchPosts();
  }

  shouldComponentUpdate(props, state) {
    return false;
  }

  handleYup() {
    // this.props.fetchPosts();
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
        cards={this.state.list}
        renderCard={cardData => (
          <Card
            width={width}
            height={height}
            stylesCard={styles.card}
            data={cardData}
          />
        )}
        renderNoMoreCards={() => <NoItems><Text>Empty</Text></NoItems>}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
      >
      test
      </Swiper>);

    const mainContent = this.state.page === 'nav.home' ? swiper : (<Text>Not A Home</Text>);

    return (
      <View style={{ flex: 1 }} theme={myTheme} >
        <View style={{ flex: 1 }}>
          {mainContent}
        </View>
      </View>
    );
  }
}

function bindAction() {
  return {};
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    posts: state.posts.posts,
    list: state.posts.posts,
  };
}

export default connect(mapStateToProps, bindAction)(Home);
