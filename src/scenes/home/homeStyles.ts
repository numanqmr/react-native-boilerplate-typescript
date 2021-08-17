import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { PRIMARY } from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: PRIMARY,
        fontSize: RFPercentage(3),
    },
});

export default styles;
