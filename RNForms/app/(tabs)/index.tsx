import {
  Button,
  SafeAreaView,
  StatusBar,
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
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
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
  const validateForm = () => {
    const errors: { username?: string; password?: string } = {};

    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("submitted", username, password);
      setUsername('');
      setPassword('');
      setErrors({});
    }
  }

  const content = (
      <View style={styles.form}>
        <Image source={require('../../assets/images/splash-icon.png')} style={styles.image}/>
        <Text style={styles.label}>Username</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
        />
        {
          errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null
        }
        <Text style={styles.label}>Password</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
        />
        {
          errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null
        }
        <Button title="Login" onPress={handleSubmit}/>
      </View>
  );

  return (
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
          style={styles.container}
      >
        {Platform.OS === 'android' ? (
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 20 }}
                keyboardShouldPersistTaps="handled"
            >
              {content}
            </ScrollView>
        ) : (
            content
        )}
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    marginHorizontal: 20,
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
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 50,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});