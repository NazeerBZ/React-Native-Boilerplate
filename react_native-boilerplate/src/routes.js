import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Demo } from './containers';

// const SubRoutes = DrawerNavigator({

// })

const Routes = StackNavigator({
    'Demo': {
        screen: Demo
    }
})


export default Routes;