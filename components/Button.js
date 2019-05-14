import React, {Component}  from 'react';
import {Text,Dimensions,TouchableOpacity} from 'react-native';

const {width,height}=Dimensions.get('window');
class Button extends Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.onClick} style={styles.buttonStyle}>
                <Text style={{color:'white'}}>Kaydet</Text>
            </TouchableOpacity>
        );
    }
}

const styles={
    buttonStyle:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8a2be2',
      width: width*0.5,
      height:35,
      marginTop: 5,
      borderRadius: 5,
    }
}
export default Button;