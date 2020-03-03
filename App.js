import React from 'react';
import { StyleSheet,View,StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import QuestionaireScreen from './src/screens/QuestionaireScreen';

const AppNavigator = createStackNavigator({
  Questionaire: {
    screen: QuestionaireScreen,
  },
});

const AppContainer = createAppContainer(AppNavigator);


class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        
          <View style={{flex:1,}}>
            <StatusBar barStyle="dark-content" />
            <AppContainer />
          </View>

      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  
});


export default App;
