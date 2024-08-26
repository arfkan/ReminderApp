import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IUserLogin } from '@/types';
import { inputBoxStyles } from '@/styles/common/inputBox';
import { ButonStyles } from '@/styles/common/button';


const LoginPage = () => {
  const [userProps, setUserProps] = useState<IUserLogin>({
    email: '',
    password: '',
  });
  const navigation = useNavigation();

  const handleChange = (name: keyof IUserLogin, value: string) => {
    setUserProps(prevState => ({
      ...prevState,
      [name]: value,
    }));

    
  };

  const handleLogin = () => {
  
    console.log('Giriş bilgileri:', userProps);
  }

  return (
    <View style={styles.container}>
   
    
      <TextInput
        style={inputBoxStyles.inputBox}
        placeholder="E-posta"
        value={userProps.email}
        onChangeText={(value) => handleChange('email', value)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={inputBoxStyles.inputBox}
        placeholder="Password"
        value={userProps.password}
        onChangeText={(value) => handleChange('password', value)}
        secureTextEntry
      />
     

      <TouchableOpacity
        style={ButonStyles.button}
        onPress={handleLogin}
      >
        <Text style={ButonStyles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
     
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

});

export default LoginPage;