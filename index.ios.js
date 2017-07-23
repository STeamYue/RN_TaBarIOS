/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
//导出自定义的 MainTabBar
import MainTabBar from "./src/pages/MainTabBar.js"
export default class RN_TaBarIOS extends Component {
  render() {
    return (
      <MainTabBar></MainTabBar>
    );
  }
}
const styles = StyleSheet.create({
});
AppRegistry.registerComponent('RN_TaBarIOS', () => RN_TaBarIOS);
