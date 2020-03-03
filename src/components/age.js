import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput
  } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 
class Mcq extends React.Component{
  render() {
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center",padding:20}}>
            <Text style={{marginBottom:30,fontSize:20,textAlign:'center',color:'gray',fontFamily:'sans-serif-condensed'}}>{this.props.question}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-around',width:"100%",alignItems:'flex-start'}}>
                <TextInput
                    placeholder="Age"
                    style={{borderBottomWidth:1,width:200}}
                    keyboardType="numeric"
                    onChangeText={(text)=>{
                        this.props.pro.dispatch({type:this.props.action,data:text});
                    }}
                />
            </View>
        </View>
    );
  }
}

export default Mcq;