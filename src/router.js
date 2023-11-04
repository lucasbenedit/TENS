import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity} from 'react-native';

import Home from './pages/Home';
import Detail from './pages/Detail';

const stack = createNativeStackNavigator();

function Routes(){
return(
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen
            nome="Home"
            component={Home}
            options={{headerShown: false}}
            />
            <stack.Screen
            nome="Detail"
            component={Detail}
            options={{
                headerRight: ()  =>(
                  <TouchableOpacity style={{ marginRight:15}}>
                    <Feather
                    name="shopping-cart"
                    size={24}
                    color="black"
                    />
                  </TouchableOpacity>
                )
            }}
            />
        </stack.Navigator>
    </NavigationContainer>
)
}

export default Routes;