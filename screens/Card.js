import { View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../components/ui/colors';

function Card({children}) {
    return <View style={styles.card}>{children}</View>
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: 100,
        backgroundColor: Colors.primary800,
        elevation: 8, //adnroid shadow
        shadowColor: 'black', //ios shadows
        shadowOffset: { width: 0, height: 2}, //ios shadows
        shadowRadius: 6, //ios shadows
        shadowOpacity: 0.25 //ios shadows
    }
});