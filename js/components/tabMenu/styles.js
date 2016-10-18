
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
  },
  row: {
    flex: 1,
    alignItems: 'center',
  },
  noTextView: {
    flex: 1,
    backgroundColor:'#ebeef0',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  mt: {
    marginTop: 20,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 500,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

    backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    right: 30,
    justifyContent: 'center',
    position: 'absolute',
    top: 30,
  },
});
