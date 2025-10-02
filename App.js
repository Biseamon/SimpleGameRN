import { StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import { useState,useEffect } from 'react';
import { useFonts } from 'expo-font';


import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  
  const [loaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });


  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
    <GameScreen
    userNumber={userNumber} 
    onGameOver={gameOverHandler}
    />
  );
  }

  if (gameIsOver && userNumber) {
    screen = (
    <GameOverScreen 
    userNumber={userNumber}
    roundsNumber={guessRounds}
    onStartNewGame={startNewGameHandler}
    />
    );
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>   
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    rootScreen: {
      flex: 1
    },
    backgroundImage: {
      opacity: 0.15
    }
});
