import { Poppins_500Medium, useFonts } from "@expo-google-fonts/poppins";
import { Inter_200ExtraLight } from "@expo-google-fonts/inter";
import { StyleSheet, Text, View } from "react-native";


const Person = ({ name, age }) => {
    let [fontsLoaded, fontError] = useFonts ({
        Poppins_500Medium, Inter_200ExtraLight
    })

    if (!fontsLoaded && !fontError) {
        return null;
    }
        
    return (
        <View style={styles.container}>
            <Text style={styles.text_line}>Nome: {name}</Text>
            <Text style={styles.text_age}>Idade: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#808080',
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    text_line: {
        color: '#383838',
        fontSize: 16,
        fontFamily: "Inter_200ExtraLight"
    },
    text_age: {
        color: '#f0f0f0',
        fontSize: 14,
        fontFamily: 'Poppins_500Medium'
    }
})

export default Person;