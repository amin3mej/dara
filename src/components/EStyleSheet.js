import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const colors = {
  $CHeader: '#181B48',

  $CProfit: '#49C29F',
  $CLoss: '#FEC434',
  $CTotal: '#6EB6FE',

  $CPricePrimary: 'white',
  $CPriceSecondary: 'white',
};

EStyleSheet.build({
  $width: width,
  $height: height,
  ...colors,
  $f: {
    fontFamily: 'Vazir',
    fontWeight: 'normal',
  },
  '@media android': {
    $fb: {
      fontFamily: 'Vazir-Bold',
      fontWeight: '800',
    },
    $fm: {
      fontFamily: 'Vazir-Medium',
      fontWeight: '500',
    },
  },

  // '@media ios': {
  // }
});
export default EStyleSheet;
