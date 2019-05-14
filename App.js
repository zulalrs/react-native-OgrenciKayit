/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';
import {Router,Scene,Stack,Actions} from 'react-native-router-flux';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';
import List from './components/List';
import Input from './components/Input';
import Detail from './components/Detail';
import Grade from './components/Grade';

export default class App extends Component {
  renderRight(){
    return(
      <TouchableOpacity>
        <Text onPress={()=>Actions.input({type:'push'})}>Add Item</Text>
      </TouchableOpacity>
    );
  }
  render() {
    
    return (
   
      <Router>
        <Stack key='root'>
          <Scene
            key="list"
            component={List}
            title='Öğrenci Listesi'
            initial
            renderRightButton={this.renderRight()}
          />
          <Scene
            key="input"
            component={Input}
            title='Öğrenci Kayıt'
          />
          <Scene
            key="detail"
            component={Detail}
            title='Öğrenci Detay'
          />
           <Scene
            key="grade"
            component={Grade}
            title='Not Giriş'
          />
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
