
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { NavigatorScreenParams } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Login: undefined;
};

export type DrawerParamList = {
    Dashboard: undefined;
    Profile: undefined;
    Settings: undefined;
};


export type MainStackParamList = {
    AuthStack: NavigatorScreenParams<RootStackParamList>;
    DrawerStack: NavigatorScreenParams<DrawerParamList>;
    Wallet: undefined;
    Withdrawal: undefined;
  };


export type MainScreenNavigationProp = StackNavigationProp<MainStackParamList>;
export type RootNavigationProp = StackNavigationProp<RootStackParamList>
export type DrawerNavigationParams = DrawerNavigationProp<DrawerParamList>