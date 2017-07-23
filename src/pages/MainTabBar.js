import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
} from 'react-native';
import HomePage from "./HomePage";
import MyPage from "./MyPage";
export default class MainTabBar extends Component {
  constructor(props){
    super (props);
    this.state= {
      selectedBarItem:"home"
    }
  }
  render() {
    return (
      <TabBarIOS
        barTintColor = "red"
        tintColor = "green"
        unselectedTintColor ="gray"
        translucent = {true}
        >
          <TabBarIOS.Item
            title = "首页"
            selected = {this.state.selectedBarItem == "home"}
            onPress = {
              ()=>{
                this.setState({selectedBarItem:"home"})
              }
            }
            >
          {/* <HomePage></HomePage> */}

          <NavigatorIOS
             style={{flex:1}}
             initialRoute = {{
               component: HomePage,
               title: '首页'
             }}
             rs = {(route) =>
               {
                 return  n;
               }
             }
             renderScene = { (route, navigator) => {
               let HomePage = route.component;
               return <HomePage navigator={navigator}/>
             }}
             >
           </NavigatorIOS>

          </TabBarIOS.Item>
          <TabBarIOS.Item
            title = "我的"
            selected = {this.state.selectedBarItem === "myPage"}
            onPress = {
              ()=>{
                this.setState({selectedBarItem:"myPage"})
              }
            }
            >
            <MyPage></MyPage>
          </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
const styles = StyleSheet.create({
});
