import { StyleSheet, Text, View , TextInput} from 'react-native'
import React , {useState} from 'react'

const TextScreen = () => {
    const [text, setText] = useState("");
  return (
    <View>
      <Text>TextScreen</Text>
      <TextInput 
      autoCapitalize='none'
      autoCorrect={false}
      style={styles.input}
      value={text}
      onChangeText={(newValue) => setText(newValue)}
      />
      <Text>your text is: {text}</Text>
    </View>
  )
}

export default TextScreen

const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor: "red",
        borderWidth: 2,
    },
});