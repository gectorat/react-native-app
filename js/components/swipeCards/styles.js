const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  mainContainer: {
    margin: 20,
  },
  name: {
    flex: 0.4
  },
  companyName: {
    alignSelf: 'stretch'
  },
  location: {
    fontSize: 12,
    alignSelf: 'stretch',
    fontFamily: 'HelveticaNeue-Light'
  },
  headSection: {
    borderBottomColor: '#d6d7da',
    paddingBottom: 15,
    borderBottomWidth: 2
  },
  title: {
    marginTop: 40
  },
  body: {
    marginTop: 20
  },
  image: {
    width: 300,
    height: 300
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})