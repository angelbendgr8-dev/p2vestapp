import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useReducer, useState } from 'react'
import SplashScreen from 'react-native-splash-screen';
import { MainStackParamList } from '../utils/rootParams';
import AuthStack from './AuthNav';
import DrawerTab from './Drawer';
import Wallet from '../Pages/Wallet';
import Withdrawal from '../Pages/Withdrawal';
import { loginReducer } from '../state/LoginReducer';


const Stack = createStackNavigator<MainStackParamList>();
export const StackNav = () => {
  // const {token} = useAuth();
  // const [token, setToken] = useState(false)
  // const [state, dispatch] = useReducer(loginReducer, {});

  React.useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 3000);
  }, []);


  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'AuthStack'}>


      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Withdrawal" component={Withdrawal} />


    </Stack.Navigator>
  )
}
