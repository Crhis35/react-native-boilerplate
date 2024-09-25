import type { NavigatorScreenParams } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

export type SignUpStackParamList = {
  Step1: undefined;
};

export type SignInStackParamList = {
  ClientSignIn: undefined;
};

export type LoggedOutParamList = {
  Authentication: undefined;
  SignUp: NavigatorScreenParams<SignUpStackParamList>;
  SignIn: NavigatorScreenParams<SignInStackParamList>;
  Success: undefined;
};

export type LoggedOutStackScreenProps<T extends keyof LoggedOutParamList> =
  StackScreenProps<LoggedOutParamList, T>;

export type LoggedInStackScreenProps<T extends keyof LoggedInParamList> =
  StackScreenProps<LoggedInParamList, T>;

export type RootStackParamList = LoggedOutParamList & LoggedInParamList;
