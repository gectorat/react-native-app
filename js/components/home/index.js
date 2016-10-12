
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Dimensions from 'Dimensions';

import NoItems from '../common/NoItemContentMsg';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import Swiper from '../swipeCards/swiper';
import Card from '../swipeCards/card';

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

  constructor(props) {
    super(props);
    this.state = { list: props.list, page: 'home' };
  }

  handleYup() {
    console.log(this);
    console.log('YES');
  }

  handleNope() {
    console.log(this);
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
      />);

    const mainContent = this.state.page === 'home' ? <NoItems><Text>Empty</Text></NoItems> : <NoItems><Text>Empty</Text></NoItems>;

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
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(Home);
