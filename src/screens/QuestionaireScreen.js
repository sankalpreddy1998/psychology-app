import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Mcq from '../components/slider';
import Mcq7 from '../components/slider7';
import Age from '../components/age';
import Gender from '../components/gender';
import { ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import RNAndroidInstalledApps from 'react-native-android-installed-apps';

class HomeScreen extends React.Component {
    render() {
      const questions = this.props.questions;
      return(
        <View style={styles.container}>
          <ScrollView>
              
          <Text style={{fontWeight:'bold',backgroundColor:'yellow',borderTopWidth:1,textAlign:'center',fontSize:30}}>PPI scale</Text>
              <Mcq7 question={questions.q1.question} action={questions.q1.ac} pro={this.props}/>
              <Mcq7 question={questions.q2.question} action={questions.q2.ac} pro={this.props}/>
              <Mcq7 question={questions.q3.question} action={questions.q3.ac} pro={this.props}/>
              <Mcq7 question={questions.q4.question} action={questions.q4.ac} pro={this.props}/>
              <Mcq7 question={questions.q5.question} action={questions.q5.ac} pro={this.props}/>
              <Mcq7 question={questions.q6.question} action={questions.q6.ac} pro={this.props}/>
              <Mcq7 question={questions.q7.question} action={questions.q7.ac} pro={this.props}/>
              <Mcq7 question={questions.q8.question} action={questions.q8.ac} pro={this.props}/>
              <Mcq7 question={questions.q9.question} action={questions.q9.ac} pro={this.props}/>
              <Mcq7 question={questions.q10.question} action={questions.q10.ac} pro={this.props}/>
              <Mcq7 question={questions.q11.question} action={questions.q11.ac} pro={this.props}/>
              <Mcq7 question={questions.q12.question} action={questions.q12.ac} pro={this.props}/>
              <Mcq7 question={questions.q13.question} action={questions.q13.ac} pro={this.props}/>
              <Mcq7 question={questions.q14.question} action={questions.q14.ac} pro={this.props}/>
              <Mcq7 question={questions.q15.question} action={questions.q15.ac} pro={this.props}/>
              <Mcq7 question={questions.q16.question} action={questions.q16.ac} pro={this.props}/>
              <Mcq7 question={questions.q17.question} action={questions.q17.ac} pro={this.props}/>

              <Text style={{fontWeight:'bold',backgroundColor:'yellow',borderTopWidth:1,textAlign:'center',fontSize:30}}>You find yourself to be someone who:</Text>
              <Mcq question={questions.q18.question} action={questions.q18.ac} pro={this.props}/>
              <Mcq question={questions.q19.question} action={questions.q19.ac} pro={this.props}/>
              <Mcq question={questions.q20.question} action={questions.q20.ac} pro={this.props}/>
              <Mcq question={questions.q21.question} action={questions.q21.ac} pro={this.props}/>
              <Mcq question={questions.q22.question} action={questions.q22.ac} pro={this.props}/>
              <Mcq question={questions.q23.question} action={questions.q23.ac} pro={this.props}/>
              <Mcq question={questions.q24.question} action={questions.q24.ac} pro={this.props}/>
              <Mcq question={questions.q25.question} action={questions.q25.ac} pro={this.props}/>
              <Mcq question={questions.q26.question} action={questions.q26.ac} pro={this.props}/>
              <Mcq question={questions.q27.question} action={questions.q27.ac} pro={this.props}/>
              <Mcq question={questions.q28.question} action={questions.q28.ac} pro={this.props}/>
              <Mcq question={questions.q29.question} action={questions.q29.ac} pro={this.props}/>
              <Mcq question={questions.q30.question} action={questions.q30.ac} pro={this.props}/>
              <Mcq question={questions.q31.question} action={questions.q31.ac} pro={this.props}/>
              <Mcq question={questions.q32.question} action={questions.q32.ac} pro={this.props}/>
              <Mcq question={questions.q33.question} action={questions.q33.ac} pro={this.props}/>
              <Mcq question={questions.q34.question} action={questions.q34.ac} pro={this.props}/>
              <Mcq question={questions.q35.question} action={questions.q35.ac} pro={this.props}/>
              <Mcq question={questions.q36.question} action={questions.q36.ac} pro={this.props}/>
              <Mcq question={questions.q37.question} action={questions.q37.ac} pro={this.props}/>
              <Mcq question={questions.q38.question} action={questions.q38.ac} pro={this.props}/>
              <Mcq question={questions.q39.question} action={questions.q39.ac} pro={this.props}/>
              <Mcq question={questions.q40.question} action={questions.q40.ac} pro={this.props}/>
              <Mcq question={questions.q41.question} action={questions.q41.ac} pro={this.props}/>
              <Mcq question={questions.q42.question} action={questions.q42.ac} pro={this.props}/>
              <Mcq question={questions.q43.question} action={questions.q43.ac} pro={this.props}/>
              <Mcq question={questions.q44.question} action={questions.q44.ac} pro={this.props}/>
              <Mcq question={questions.q45.question} action={questions.q45.ac} pro={this.props}/>
              <Mcq question={questions.q46.question} action={questions.q46.ac} pro={this.props}/>
              <Mcq question={questions.q47.question} action={questions.q47.ac} pro={this.props}/>
              <Mcq question={questions.q48.question} action={questions.q48.ac} pro={this.props}/>
              <Mcq question={questions.q49.question} action={questions.q49.ac} pro={this.props}/>
              <Mcq question={questions.q50.question} action={questions.q50.ac} pro={this.props}/>
              <Mcq question={questions.q51.question} action={questions.q51.ac} pro={this.props}/>
              <Mcq question={questions.q52.question} action={questions.q52.ac} pro={this.props}/>
              <Mcq question={questions.q53.question} action={questions.q53.ac} pro={this.props}/>
              <Mcq question={questions.q54.question} action={questions.q54.ac} pro={this.props}/>
              <Mcq question={questions.q55.question} action={questions.q55.ac} pro={this.props}/>
              <Mcq question={questions.q56.question} action={questions.q56.ac} pro={this.props}/>
              <Mcq question={questions.q57.question} action={questions.q57.ac} pro={this.props}/>
              <Mcq question={questions.q58.question} action={questions.q58.ac} pro={this.props}/>
              <Mcq question={questions.q59.question} action={questions.q59.ac} pro={this.props}/>
              <Mcq question={questions.q60.question} action={questions.q60.ac} pro={this.props}/>
              <Mcq question={questions.q61.question} action={questions.q61.ac} pro={this.props}/>

              <Text style={{fontWeight:'bold',backgroundColor:'yellow',borderTopWidth:1,textAlign:'center',fontSize:30}}>App Adoption:</Text>
              <Mcq question={questions.q62.question} action={questions.q62.ac} pro={this.props}/>
              <Mcq question={questions.q63.question} action={questions.q63.ac} pro={this.props}/>
              <Mcq question={questions.q64.question} action={questions.q64.ac} pro={this.props}/>
              <Mcq question={questions.q65.question} action={questions.q65.ac} pro={this.props}/>
              <Mcq question={questions.q66.question} action={questions.q66.ac} pro={this.props}/>
              <Mcq question={questions.q67.question} action={questions.q67.ac} pro={this.props}/>
              <Mcq question={questions.q68.question} action={questions.q68.ac} pro={this.props}/>
              <Mcq question={questions.q69.question} action={questions.q69.ac} pro={this.props}/>
              <Mcq question={questions.q70.question} action={questions.q70.ac} pro={this.props}/>


              <Text style={{fontWeight:'bold',backgroundColor:'yellow',borderTopWidth:1,textAlign:'center',fontSize:30}}>Personal:</Text>
              <View style={{width:300}}>
              <Gender question={questions.q71.question} action={questions.q71.ac} pro={this.props}/>
              <Age question={questions.q72.question} action={questions.q72.ac} pro={this.props}/>
              </View>
              
              
              <TouchableOpacity style={{backgroundColor:"blue",width:"100%",height:60,alignItems:"center",justifyContent:"center"}} onPress={()=>{
                if(
                  questions.q1.answer===-1||
                  questions.q2.answer===-1||
                  questions.q3.answer===-1||
                  questions.q4.answer===-1||
                  questions.q5.answer===-1||
                  questions.q6.answer===-1||
                  questions.q7.answer===-1||
                  questions.q8.answer===-1||
                  questions.q9.answer===-1||
                  questions.q10.answer===-1||
                  questions.q11.answer===-1||
                  questions.q12.answer===-1||
                  questions.q13.answer===-1||
                  questions.q14.answer===-1||
                  questions.q15.answer===-1||
                  questions.q16.answer===-1||
                  questions.q17.answer===-1||
                  questions.q18.answer===-1||
                  questions.q19.answer===-1||
                  questions.q20.answer===-1||
                  questions.q21.answer===-1||
                  questions.q22.answer===-1||
                  questions.q23.answer===-1||
                  questions.q24.answer===-1||
                  questions.q25.answer===-1||
                  questions.q26.answer===-1||
                  questions.q27.answer===-1||
                  questions.q28.answer===-1||
                  questions.q29.answer===-1||
                  questions.q30.answer===-1||
                  questions.q31.answer===-1||
                  questions.q32.answer===-1||
                  questions.q33.answer===-1||
                  questions.q34.answer===-1||
                  questions.q35.answer===-1||
                  questions.q36.answer===-1||
                  questions.q37.answer===-1||
                  questions.q38.answer===-1||
                  questions.q39.answer===-1||
                  questions.q40.answer===-1||
                  questions.q41.answer===-1||
                  questions.q42.answer===-1||
                  questions.q43.answer===-1||
                  questions.q44.answer===-1||
                  questions.q45.answer===-1||
                  questions.q46.answer===-1||
                  questions.q47.answer===-1||
                  questions.q48.answer===-1||
                  questions.q49.answer===-1||
                  questions.q50.answer===-1||
                  questions.q51.answer===-1||
                  questions.q52.answer===-1||
                  questions.q53.answer===-1||
                  questions.q54.answer===-1||
                  questions.q55.answer===-1||
                  questions.q56.answer===-1||
                  questions.q57.answer===-1||
                  questions.q58.answer===-1||
                  questions.q59.answer===-1||
                  questions.q60.answer===-1||
                  questions.q61.answer===-1||
                  questions.q62.answer===-1||
                  questions.q63.answer===-1||
                  questions.q64.answer===-1||
                  questions.q65.answer===-1||
                  questions.q66.answer===-1||
                  questions.q67.answer===-1||
                  questions.q68.answer===-1||
                  questions.q69.answer===-1||
                  questions.q70.answer===-1||
                  questions.q71.answer===-1||
                  questions.q72.answer===-1
                ){
                  alert("one or more of the questions are not answered");
                }
                else{
                  RNAndroidInstalledApps.getNonSystemApps()
                  .then(apps => {
                    var apps_array = [];
                    apps.forEach(app => {
                      apps_array.push(app.appName);
                    });
                    axios.post('https://psy-vit-sankalp.herokuapp.com/',{
                      q1:questions.q1.answer,
                      q2:questions.q2.answer,
                      q3:questions.q3.answer,
                      q4:questions.q4.answer,
                      q5:questions.q5.answer,
                      q6:questions.q6.answer,
                      q7:questions.q7.answer,
                      q8:questions.q8.answer,
                      q9:questions.q9.answer,

                      q10:questions.q10.answer,
                      q11:questions.q11.answer,
                      q12:questions.q12.answer,
                      q13:questions.q13.answer,
                      q14:questions.q14.answer,
                      q15:questions.q15.answer,
                      q16:questions.q16.answer,
                      q17:questions.q17.answer,
                      q18:questions.q18.answer,
                      q19:questions.q19.answer,

                      q20:questions.q20.answer,
                      q21:questions.q21.answer,
                      q22:questions.q22.answer,
                      q23:questions.q23.answer,
                      q24:questions.q24.answer,
                      q25:questions.q25.answer,
                      q26:questions.q26.answer,
                      q27:questions.q27.answer,
                      q28:questions.q28.answer,
                      q29:questions.q29.answer,

                      q30:questions.q30.answer,
                      q31:questions.q31.answer,
                      q32:questions.q32.answer,
                      q33:questions.q33.answer,
                      q34:questions.q34.answer,
                      q35:questions.q35.answer,
                      q36:questions.q36.answer,
                      q37:questions.q37.answer,
                      q38:questions.q38.answer,
                      q39:questions.q39.answer,

                      q40:questions.q40.answer,
                      q41:questions.q41.answer,
                      q42:questions.q42.answer,
                      q43:questions.q43.answer,
                      q44:questions.q44.answer,
                      q45:questions.q45.answer,
                      q46:questions.q46.answer,
                      q47:questions.q47.answer,
                      q48:questions.q48.answer,
                      q49:questions.q49.answer,


                      q50:questions.q50.answer,
                      q51:questions.q51.answer,
                      q52:questions.q52.answer,
                      q53:questions.q53.answer,
                      q54:questions.q54.answer,
                      q55:questions.q55.answer,
                      q56:questions.q56.answer,
                      q57:questions.q57.answer,
                      q58:questions.q58.answer,
                      q59:questions.q59.answer,
                      

                      q60:questions.q60.answer,
                      q61:questions.q61.answer,
                      q62:questions.q62.answer,
                      q63:questions.q63.answer,
                      q64:questions.q64.answer,
                      q65:questions.q65.answer,
                      q66:questions.q66.answer,
                      q67:questions.q67.answer,
                      q68:questions.q68.answer,
                      q69:questions.q69.answer,
                      q70:questions.q70.answer,


                      q71:questions.q71.answer,
                      q72:questions.q72.answer,
                      
                      
                      apps:apps_array
                    })
                    .then((res)=>{alert(res.data)})
                    .catch((err)=>{alert(err)})
                    
                  })
                  .catch(error => {
                    alert(error);
                  });
                }
              }}><Text style={{color:"white",fontSize:20}}>Submit</Text></TouchableOpacity>
          </ScrollView>
        </View>
      );
    }
}

const mapStateToProps =(state)=> {
    return{
        questions: state.questions
    }
}

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e6e6e6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    plain: {
      flex: 1,
    },
});