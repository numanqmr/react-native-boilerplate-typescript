import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { PRIMARY, WHITE } from '../../styles/colors';

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor: WHITE,
    flexDirection:'column',
    alignContent:'center',
    justifyContent:'center'
},
textStyle:{
    alignSelf:'center',
    flex:0.5,
    fontSize: RFPercentage(3),
    color: PRIMARY
},
loginButton:{
    position:'absolute',
    alignSelf:'center',
    width: widthPercentageToDP('55%')
}
});

export default styles;
