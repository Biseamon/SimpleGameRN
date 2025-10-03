import { TextInput, StyleSheet, View, Alert, Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";

import Colors from "../components/ui/colors";
import Title from "../components/ui/Title";
import Card from "./Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPickedNumber}) {

    const {width, height} = useWindowDimensions();

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

    const marginTopDistance = height < 844 ? 30 : 40;
    console.log(width, height);

    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
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
        </KeyboardAvoidingView>   
        </ScrollView>           
    );
}

export default StartGameScreen;

//const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        //marginTop: deviceHeight < 380 ? 30 : 100,
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