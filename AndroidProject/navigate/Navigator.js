import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';

import Start from '../screens/Start';
import Second from '../screens/Second';
import Third from '../screens/Third';

const MyNavigator = createStackNavigator({
     Start: Start,
     SecondScreen: {
       screen: Second
     } ,
     'Third Screen': Third
});

export default createAppContainer(MyNavigator);