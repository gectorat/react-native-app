
import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import {
  View,
  Text,
  List,
  ListItem,
   } from 'native-base';
import NoItems from '../common/NoItemContentMsg';
import { syncPosts, fetchPosts } from '../../actions/post';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
    setIndex: React.PropTypes.func,
    name: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  navigateTo(route, index) {
    this.props.closeDrawer();
    this.props.setIndex(index);
    this.props.replaceOrPushRoute(route);
  }

  render() {
    const { posts, isEditing } = this.props.posts;
    const { syncPosts } = this.props;
    const content = posts ? (
        posts.map((post) => {
            return (
              <List key={post.timestamp}>
                <ListItem button onPress={()=>Alert.alert('Text', post.body)}>
                  <Text>{post.title}</Text>
                </ListItem>
              </List>
            )
        })
    ) : (
        <NoItems>Empty</NoItems>
    );

    return (
      <View>
        {content}
      </View>
    );
  }
}
function bindAction(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    syncPosts: () => dispatch(syncPosts())
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    posts: state.posts,
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(Home);
