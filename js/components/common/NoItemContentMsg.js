import React, { Component } from 'react';
import { Button } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

class NoItemMsg extends Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
  }

  render() {
    const children = this.props.children;
    if (!this.props.children) {
      return null;
    }
    return (
      <Grid>
        <Row>
          <Col height={300} />
        </Row>
        <Row>
          <Col>
            <Button block transparent>
              {children}
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default NoItemMsg;
