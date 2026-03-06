import {Button, SafeAreaView, StatusBar, StyleSheet, Switch, Text, TextInput} from 'react-native';
import {useState} from "react";
import {View} from "react-native";

// export default function HomeScreen() {
//   const [name, setName] = useState('');
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   return (
//     <SafeAreaView style={styles.container}>
//       <TextInput
//           style={styles.input}
//           value={name}
//           onChangeText={setName}
//           placeholder="Enter your name"
//           autoCorrect={false}
//           autoCapitalize="none"
//           // secureTextEntry
//           // keyboardType="numeric"
//       />
//       <TextInput style={[styles.input, styles.multilineText]} placeholder="message" multiline/>
//       <Text style={styles.text}>My name is {name}</Text>
//       <View style={styles.switchContainer}>
//         <Text style={styles.text}>Dark mode</Text>
//         <Switch
//         value={isDarkMode}
//         onValueChange={() => setIsDarkMode((previousState) => !previousState)}
//         trackColor={{ false: "#767577", true: "lightblue" }}
//         thumbColor="#f4f3f4"
//         />
//       </View>
//     </SafeAreaView>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: StatusBar.currentHeight,
//   },
//   input:{
//     height: 40,
//     margin: 12,
//     padding: 10,
//     borderWidth: 1,
//   },
//   text: {
//     fontSize: 30,
//     padding: 10,
//   },
//   multilineText: {
//     minHeight: 100,
//     textAlignVertical: 'top',
//   },
//   switchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//   },
// });

export default function HomeScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.label}>Username</Text>
          <TextInput
              style={styles.input}
              placeholder="Enter your username"
              value={username}
              onChangeText={setUsername}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
          />
          <Button title="login" onPress={() => {}}/>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  }
});