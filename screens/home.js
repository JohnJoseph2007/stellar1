import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('DP');
          }}>
          <Text>Daily Pictures</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SC');
          }}>
          <Text>Spacecrafts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SM');
          }}>
          <Text>Star Maps</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
