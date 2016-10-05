
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import { View as RawView } from 'react-native';
import { connect } from 'react-redux';
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
    this.state = { description: '' }
  }

  componentDidMount() {
    // this.props.fetchPosts();
  }

  render() {

    const { posts, isEditing } = this.props.posts;
    const mockText = 'NativeBase is a free and open source framework that enables developers to build high-quality mobile apps using React Native iOS and Android apps with a fusion of ES6.';
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.props.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>
          <Title>Tab Menu</Title>
        </Header>
        <Content style={{backgroundColor:'#000'}}>
          <Tabs>
            <View tabLabel='Home'>
              <RawView style={{backgroundColor:'#000'}}>
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
              <RawView style={{backgroundColor:'#000'}}>
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
        </Content>
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
