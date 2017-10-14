import { StackNavigator } from 'react-navigation';
import { App, Login } from '../containers';

const StackNav = StackNavigator({
    'App': {
        screen: App
    },
    'Login': {
        screen: Login
    }
},
    {
        navigationOptions: {
            header: null
        },
        initialRouteName: 'App'
    }
)

export default StackNav;