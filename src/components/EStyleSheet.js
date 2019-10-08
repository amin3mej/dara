import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const colors = {
  $CRaise: '#23c2a0',
  $CWithdrawal: '#f18e61',
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
