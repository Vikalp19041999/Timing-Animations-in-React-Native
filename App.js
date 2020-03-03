import React, { Component } from 'react'
import { LayoutAnimation, NativeModules, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const { UIManager } = NativeModules

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class App extends Component {

  state = {
    w: 300,
    h: 300
  }

  _on_Press = () => {
    LayoutAnimation.spring()
    this.setState({ w: this.state.w - 15, h: this.state.h + 15 })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appHeader}>
          <Text style={styles.headerText}>Timing Animations</Text>
        </View>
        <View style={styles.contentView}>
          <View style={[styles.box, , { width: this.state.w, height: this.state.h }]} />
          <TouchableOpacity onPress={this._on_Press}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Press me!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  appHeader: {
    height: '9%',
    backgroundColor: '#182C61',
    alignItems: 'center'
  },
  headerText: {
    marginTop: '4%',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  },
  box: {
    width: '50%',
    height: '30%',
    backgroundColor: 'skyblue',
  },
  button: {
    backgroundColor: '#182C61',
    paddingHorizontal: '6%',
    paddingVertical: '4%',
    marginTop: '5%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  contentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})