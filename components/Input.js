import React, {Component} from 'react';
import {View,TextInput,Dimensions} from 'react-native';
import Button from './Button';

const { width, height } = Dimensions.get('window');
class Input extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            surname:''
        }
    }
    addItem(){
        console.warn('Tıklandı');
    }
    render(){
        const {name,surname}=this.state;
        return(
            <View style={styles.viewStyle}>
                <TextInput
                placeholder='İsim'
                placeholderTextColor='gray'
                style={styles.inputStyle}
                onChangeText={(text)=>this.setState({name: text})}
                value={name}
                />
                 <TextInput
                placeholder='Soyisim'
                placeholderTextColor='gray'
                style={styles.inputStyle}
                onChangeText={(text)=>this.setState({surname: text})}
                value={surname}
                />

                <Button onClick={this.addItem.bind(this)} />
            </View>
        );
    }
}

const styles={
    viewStyle:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle:{
        width:width*0.9,
        borderWidth: 1,
        borderColor: '#8a2be2',
        borderRadius: 5,
        marginTop: 5,
        paddingBottom: 3,
        paddingTop: 3,
    }
}

export default Input;