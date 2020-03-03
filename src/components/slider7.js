import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 
class Mcq extends React.Component{
  render() {
    var radio_props = [
        {label: '', value: 1 },
        {label: '', value: 2 },
        {label: '', value: 3 },
        {label: '', value: 4 },
        {label: '', value: 5 },
        {label: '', value: 6 },
        {label: '', value: 7 }
      ];
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center",padding:20}}>
            <Text style={{marginBottom:30,fontSize:20,textAlign:'center',color:'gray',fontFamily:'sans-serif-condensed'}}>{this.props.question}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-around',width:"100%",alignItems:'flex-start'}}>
                <View style={{justifyContent:'flex-start',alignItems:"center"}}>
                    <Text>Dis-</Text>
                    <Text>agree</Text>
                </View>
                <RadioForm
                    radio_props={radio_props}
                    initial={-1}
                    onPress={(value) => {
                        this.setState({value:value});
                        this.props.pro.dispatch({type:this.props.action,data:value});
                    }}
                    formHorizontal={true}
                    labelHorizontal={false}
                />
                <View style={{justifyContent:'flex-start',alignItems:"center"}}>
                    <Text>agree</Text>
                </View>
            </View>
        </View>
    );
  }
}

export default Mcq;