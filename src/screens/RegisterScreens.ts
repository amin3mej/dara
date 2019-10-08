import {Navigation} from 'react-native-navigation';
import {Main as Home} from './home';

const Register = () => {
  Navigation.registerComponent('home.main', () => Home);
};
export default Register;
