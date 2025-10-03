import {  View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../ui/colors";

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 390 ? 12 : 24,
        margin: deviceWidth < 390 ? 12 : 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    numberText: {
        color: Colors.accent500,
        fontSize: deviceWidth < 390 ? 28 : 36,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
    }
});