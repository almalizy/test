import React from 'react';

import {StyleSheet,TextInput,View} from 'react-native';

class SearchInput extends React.Component{
  constructor(props){
    super(props)
      this.state={
        text:''
      }
    }
  
    handleSubmitEditing = () => {
      const { onSubmit } = this.props;
      const { text } = this.state;
      if (!text) return;
      onSubmit(text);
      this.setState({ text: '' });
      };

  handleChangeText = text => {
    this.setState ({
      text
    })
  }
   render(){
       return(
       <View style={styles.container}>
            <TextInput
            autoCorrect ={false}
            // value={text}
            placeholder = {this.placeholder}
            onSubmitEditing={this.handleSubmitEditing}
            placeholderTextColor='white'
            underlineColorAndroid="transparent"
            style={styles.textInput}
            clearButtonMode="always"
            onChangeText = {this.handleChangeText}

            />
       </View>
       );
   }
}

const styles = StyleSheet.create({
 container:{
   height:40,
   marginTop:20,
   backgroundColor:'#666',
   marginHorizontal:10,
   paddingHorizontal:10,
   borderRadius:5,
  },
  textInput:{
     flex:1,
     color:'white'
  }
});

export default SearchInput ; 