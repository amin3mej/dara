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
    fontFamily: 'Yekan Bakh FA 04 Regular',
    fontWeight: 'normal',
  },
  '@media android': {
    $fb: {
      fontFamily: 'Yekan Bakh FA 06 Bold',
      fontWeight: '800',
    },
    $fm: {
      fontFamily: 'Yekan Bakh FA 05 Medium',
      fontWeight: '500',
    },
  },

  // '@media ios': {
  //   $fd: {
  //     fontFamily: 'IRANSansMobile(FaNum)',
  //     fontWeight: 'normal',
  //   },
  //   $fb: {
  //     // Has Bold Font
  //     fontFamily: 'IRANSansMobile',
  //     fontWeight: '700',
  //   },
  //   $fl: {
  //     // Has Light Font
  //     fontFamily: 'IRANSansMobile',
  //     fontWeight: '100',
  //   },
  //   $fm: {
  //     fontFamily: 'IRANSansMobile',
  //     fontWeight: '500',
  //   },
  //   $fbd: {
  //     // Has Bold Font
  //     fontFamily: 'IRANSansMobile(FaNum)',
  //     fontWeight: '700',
  //   },
  //   $fld: {
  //     // Has Light Font
  //     fontFamily: 'IRANSansMobile(FaNum)',
  //     fontWeight: '100',
  //   },
  //   $fmd: {
  //     fontFamily: 'IRANSansMobile(FaNum)',
  //     fontWeight: '500',
  //   },
  //   $fdigits: {
  //     fontFamily: 'KreditBack-Regular',
  //   },
  // },
});
export default EStyleSheet;
