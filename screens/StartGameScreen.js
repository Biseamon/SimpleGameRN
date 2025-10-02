import { TextInput, StyleSheet, View, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";

import Colors from "../components/ui/colors";
import Title from "../components/ui/Title";
import Card from "./Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPickedNumber}) {

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }
    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmImputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }

        onPickedNumber(chosenNumber);
    }  

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
                <Card>
                    <InstructionText>Enter a Number</InstructionText>
                    <TextInput 
                    style={styles.numberInput} 
                    maxLength={2} 
                    keyboardType="numeric"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                    />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={confirmImputHandler}>Confirm</PrimaryButton>
                        </View> 
                    </View>
                </Card>
            </View>                    
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        // marginTop: 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }

});