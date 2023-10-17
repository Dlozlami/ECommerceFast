import React from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login() {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.bigContainer}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text>Log in to your account</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Username"
                style={styles.input}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
              />
              <View style={styles.buttonContainer}>
                <Button
                  title="Login"
                />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <TouchableOpacity style={{ marginRight: 75 }}>
                    <Text>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text>Register</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={require('../assets/image.png')}
            style={styles.rightContainer}
          >
            <Text style={styles.imageText}>Better payments. 
            <br/>
            Easier and faster
            </Text>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  bigContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
  },
  leftContainer: {
    flex: 1,
    padding: 120,
  },
  rightContainer: {
    flex: 1,
    padding: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 10,
  },
  imageText: {
    fontSize: 24,
    color: 'white',
    padding: 10,
  },
});
