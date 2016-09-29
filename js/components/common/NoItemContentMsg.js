import React, { Component } from 'react';
import { Button } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

export default class NoItemMsg extends Component {
  render() {
    return (<Grid>
      <Row>
        <Col height={300}></Col>
      </Row>
      <Row>
        <Col>
          <Button block transparent>{this.props.children}</Button>
        </Col>
      </Row>
    </Grid>)
  }
}
