import { createSwitchNavigator } from 'react-navigation';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

export default createSwitchNavigator({
  App: AppNavigator,
  Auth: AuthNavigator
});

//note: there is no navigationOptions in createSwitchNavigator()