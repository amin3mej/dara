import {Navigation} from 'react-native-navigation';
import {defaultScreen} from '../Config';

export const Start = () => {
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: defaultScreen,
              },
            },
          ],
        },
      },
    });
  });
};

export interface PushProp {
  componentId: string;
  screen: string;
  passProps?: object;
}
export const Push = (props: PushProp) => {
  Navigation.push(props.componentId, {
    component: {
      name: props.screen,
      passProps: props.passProps,
    },
  });
};

export interface PopProps {
  componentId: string;
}
export const Pop = ({componentId}: PopProps) => {
  Navigation.pop(componentId);
};
