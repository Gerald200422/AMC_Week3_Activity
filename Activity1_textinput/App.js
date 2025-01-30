import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('Name: ');
  const [number, onChangeNumber] = React.useState('Age: ');
  const [adress, onChangeAdress] = React.useState('Adress: ');
  const [school, onChangeSchool] = React.useState('School: ');
  const [course, onChangeCourse] = React.useState('Course: ');
  const [email, onChangeEmail] = React.useState('Email: ');
  const [contact, onChangeContact] = React.useState('Contact: ');


  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAdress}
          value={adress}  
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}  
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}  
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}  
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeContact}
          value={contact}  
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;