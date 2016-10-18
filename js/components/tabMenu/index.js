
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import { View as RawView, ListView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import {
  Container,
  Content,
  Header,
  Title,
  Tabs,
  Text,
  Card,
  CardItem,
  Grid,
  Col,
  Row,
  Button,
  View,
  InputGroup,
  Input,
  Icon } from 'native-base';

import TabCard from '../common/cards/TabCard';
import TabCardComplex from '../common/cards/TabCardComplex';
import NoItems from '../common/NoItemContentMsg';
import { setIndex } from '../../actions/list';
import { syncPosts, fetchPosts } from '../../actions/post';
import { popRoute } from '../../actions/route';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

  static propTypes = {
    setIndex: React.PropTypes.func,
    name: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
  }

  constructor() {
    super();
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
          basic: true,
          listViewData: Array(20).fill('').map((_,i)=>`item #${i}`)
        };  
  }

  componentDidMount() {
    // this.props.fetchPosts();
  }

  render() {

    const { posts, isEditing } = this.props.posts;
    const mockText = 'Продам автомобиль Peugeot 207 + 2 комплекта резины';
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.props.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>
          <Title>Cards</Title>
        </Header>
        <View style={{backgroundColor:'#fff'}}>
          <Tabs>
            <View tabLabel='Home'>
  {
          this.state.basic &&
          <SwipeListView
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={ data => (
              <TouchableHighlight
                onPress={ _ => console.log('You touched me') }
                style={styles.rowFront}
                underlayColor={'#AAA'}
              >
                <View>
                  <Text>I'm {data} in a SwipeListView</Text>
                </View>
              </TouchableHighlight>
            )}
            renderHiddenRow={ (data, secId, rowId, rowMap) => (
              <View style={styles.rowBack}>
                <Text>Left</Text>
                <View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
                  <Text style={styles.backTextWhite}>Right</Text>
                </View>
                <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={ _ => this.deleteRow(secId, rowId, rowMap) }>
                  <Text style={styles.backTextWhite}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-150}
          />
        }
              <RawView>
                <TabCard>
                  {mockText}
                </TabCard>
                <TabCard>
                  {mockText}
                </TabCard>
                <TabCard>
                  {mockText}
                </TabCard>
                <TabCard>
                  {mockText}
                </TabCard>

              </RawView>
            </View>

            <View tabLabel="Menu">
              <RawView>
                <Card>
                  <CardItem cardBody>
                    <Text>
                      NativeBase is a free and open source framework that enables
                      developers to build high-quality mobile apps using React Native
                      iOS and Android apps with a fusion of ES6.
                    </Text>
                  </CardItem>

                  <CardItem header>
                    <Icon name='ios-eye'></Icon>
                    <Text>315</Text>
                    <Icon name='ios-heart'></Icon>
                    <Text>315</Text>

                  </CardItem>
                </Card>
              </RawView>
              <RawView style={{backgroundColor:'#000'}}>
                <TabCardComplex
                  header={{
                    iconName: "ios-people",
                    title:"Tab Header"
                  }}
                  actionMenu={true}>
                  {mockText}
                </TabCardComplex>
              </RawView>
            </View>
          </Tabs>
        </View>
      </Container>
    );
  }
}
function bindAction(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    syncPosts: () => dispatch(syncPosts()),
    popRoute: () => dispatch(popRoute()),
    setIndex: index => dispatch(setIndex(index)),
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
