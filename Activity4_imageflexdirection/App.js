import React from 'react';
import {StyleSheet, TextInput, Image, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('Name: ');
  const [number, onChangeNumber] = React.useState('Age: ');
  const [adress, onChangeAdress] = React.useState('Adress: ');
  const [school, onChangeSchool] = React.useState('School: ');
  const [course, onChangeCourse] = React.useState('Course: ');
  const [email, onChangeEmail] = React.useState('Email: ');
  const [contact, onChangeContact] = React.useState('Contact: ');
  const [aboutme, onChangeAboutme] = React.useState('About Me: ');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <Image source={require('https://e7.pngegg.com/pngimages/351/238/png-clipart-computer-icons-authentication-name-icon-text-investment.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Name"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Image source={require('https://e7.pngegg.com/pngimages/351/238/png-clipart-computer-icons-authentication-name-icon-text-investment.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Age"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('https://e7.pngegg.com/pngimages/351/238/png-clipart-computer-icons-authentication-name-icon-text-investment.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAdress}
            value={adress}
            placeholder="Address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('https://e7.pngegg.com/pngimages/351/238/png-clipart-computer-icons-authentication-name-icon-text-investment.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeSchool}
            value={school}
            placeholder="School"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('https://e7.pngegg.com/pngimages/351/238/png-clipart-computer-icons-authentication-name-icon-text-investment.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeCourse}
            value={course}
            placeholder="Course"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('https://e7.pngegg.com/pngimages/351/238/png-clipart-computer-icons-authentication-name-icon-text-investment.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('https://e7.pngegg.com/pngimages/351/238/png-clipart-computer-icons-authentication-name-icon-text-investment.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeContact}
            value={contact}
            placeholder="Contact"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('https://e7.pngegg.com/pngimages/351/238/png-clipart-computer-icons-authentication-name-icon-text-investment.png')} style={styles.icon} />
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={text => onChangeAboutme(text)}
            value={aboutme}
            style={styles.textInput}
            placeholder="About Me"
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10, 
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10, 
  },
  textInput: {
    flex: 1,
    padding: 10,
  },
});

export default TextInputExample;