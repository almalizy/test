import React from 'react';
import {Platform,View, StyleSheet, Text, KeyboardAvoidingView ,ImageBackground} from 'react-native';
import SearchInput from './components/SearchInput' ; 
import getImageForWeather from './utils/getImageForWeather';

import ButtonLarge from './components/ButtonLarge'
import { fetchLocationId, fetchWeather } from './utils/api';

export default class App extends React.Component {

    state = {
          location : 'San Francisco',
          timer : 0
        };
    

      componentDidMount(){
        this.handleUpdateLocation('sanfrancisco')
      }

      handleUpdateLocation = (city) =>{
        this.setState ({
          location :city
        })
      }

  
      componentDidMount() {
        this.timer = setInterval(this.incrementTimer, 1000)
      }
      
      incrementTimer = () => {
        this.setState(prevState => ({timer: prevState.timer + 1}))
      }


    
     resetTimer = () => {
       this.setState({
         timer :0 
       })
     }

     stopeTimer = () => {
      this.setState(prevState => ({
        timer : null 
      }))
    }


    
  render() {

    const {location,timer} = this.state

    return (
      <KeyboardAvoidingView
       style={styles.container} 
       behavior="padding">
          <ImageBackground 
          source = {getImageForWeather('Clock')}
          style={styles.imageContainer}
          imageStyle = {styles.image}
          > 
             <View style={styles.detailsContainer}>

                  <Text style={[styles.smallText, styles.textStyle]}>{timer}</Text>
                  <Text style={[styles.smallText, styles.textStyle]}>{location} </Text>
                  <Text style={[styles.smallText, styles.textStyle]}>24°</Text>

                  <SearchInput 
                  placeholder="Search any city"
                   onSubmit = {this.handleUpdateLocation}       
                  />
                  
              </View>
              <View style={{flexDirection:'row',margin:5,justifyContent:'center'}}>
                    <ButtonLarge title = "Reset"  onPress = {this.resetTimer} />
         
              </View>
              <View style={{flexDirection:'row',margin:5,justifyContent:'space-between'}}>
                    <ButtonLarge title = "Start" onPress={this.incrementTimer} />
                    <ButtonLarge title = "Stope" onPress = {this.stopeTimer} />
              </View>
            

            </ImageBackground>
      </KeyboardAvoidingView>

    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'black',
    fontSize: 25,
    },
  smallText: {
    fontSize: 18,
    },
    textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    },
    imageContainer:{
      flex:1
    },
    image:{
      flex:1,
      width:null,
      height:null,
      resizeMode: 'cover',
    },
    detailsContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
      paddingHorizontal: 20,
      },
        
};
