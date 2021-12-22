import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProfilePage } from '@shared/ui/core/pages/profile-page/profile-page';
import { Icons, Typography } from '@shared/ui/core/atoms';
import styled from 'styled-components/native';
import { boolean } from '@storybook/addon-knobs';
import { PaymentPage } from '@shared/ui/core/pages/payment-page/payment-page';
import { PaymentByPhonePage } from '@shared/ui/core/pages/payment-by-phone-page/payment-by-phone-page';
import { Category, Service } from '@shared/data/appdata';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const ScreenView = styled.View`
  flex: 1;
  background-color: ${props => props.theme.palette.background.primary};
  justify-content: center;
  align-items: center;
`;
type StackParamList = {
  home: undefined;
  payment: undefined;
  paymentbyphone: Category;
  ATM: undefined;
  profile: undefined;
  paymentdetails: Service;
};

const Stack = createNativeStackNavigator<StackParamList>();
const HomeScreensStack = createNativeStackNavigator<StackParamList>();
const ATMScreensStack = createNativeStackNavigator<StackParamList>();
const ProfileScreensStack = createNativeStackNavigator<StackParamList>();

const Tabs = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <ScreenView>
        <Typography variant="title">Главная</Typography>
      </ScreenView>
    </SafeAreaProvider>
  );
};

const PaymentScreen = ({
  navigation,
}: NativeStackScreenProps<StackParamList, 'payment'>) => {
  const navigate = navigation.navigate;

  return (
    <SafeAreaProvider>
      <ScreenView>
        <PaymentPage header="Платежи" navigate={navigate}></PaymentPage>
      </ScreenView>
    </SafeAreaProvider>
  );
};

const ATMScreen = () => {
  return (
    <SafeAreaProvider>
      <ScreenView>
        <Typography variant="title">Банкоматы</Typography>
      </ScreenView>
    </SafeAreaProvider>
  );
};

const ProfileScreen = () => {
  return (
    <SafeAreaProvider>
      <ScreenView>
        <ProfilePage
          profileInfo={{
            uri: 'https://media.gettyimages.com/photos/closeup-of-thoughtful-young-woman-wearing-eyeglasses-against-neon-picture-id1132601613?s=612x612',
            userName: 'Филипп Ребийяр Олегович',
            phone: '+7 (951) *** - ** - 24',
          }}
          menu={{
            items: [
              {
                title: 'Настройки',
                left: <Icons.Settings />,
                right: <Icons.ChevronRight />,
                onPress: () => null,
              },
              {
                title: 'Тема приложения',
                left: <Icons.Moon />,
                right: <Icons.ChevronRight />,
                onPress: () => null,
              },
              {
                title: 'Служба поддержки',
                left: <Icons.Phone />,
                onPress: () => null,
              },
              {
                title: 'Выход',
                left: <Icons.Exit />,
                onPress: () => null,
              },
            ],
          }}
        />
      </ScreenView>
    </SafeAreaProvider>
  );
};

const PaymentByPhoneScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<StackParamList, 'paymentbyphone'>) => {
  const category = route.params;

  return (
    <SafeAreaProvider>
      <ScreenView>
        <PaymentByPhonePage category={category} navigation={navigation} />
      </ScreenView>
    </SafeAreaProvider>
  );
};

const PaymentDetailsScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<StackParamList, 'paymentdetails'>) => {
  const service = route.params;
  return (
    <SafeAreaProvider>
      <ScreenView>
        <Typography variant="title">{`Details${service.service_name}`}</Typography>
      </ScreenView>
    </SafeAreaProvider>
  );
};

function HomeStackScreen() {
  return (
    <HomeScreensStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeScreensStack.Screen name={'home'} component={HomeScreen} />
    </HomeScreensStack.Navigator>
  );
}

function PaymentStackScreen({ navigation, route }: any) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'paymentbyphone') {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'payment'} component={PaymentScreen} />
      <Stack.Screen name={'paymentbyphone'} component={PaymentByPhoneScreen} />
    </Stack.Navigator>
  );
}

function ATMSStackScreen() {
  return (
    <ATMScreensStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ATMScreensStack.Screen name={'ATM'} component={ATMScreen} />
    </ATMScreensStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileScreensStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileScreensStack.Screen name={'profile'} component={ProfileScreen} />
    </ProfileScreensStack.Navigator>
  );
}

export const AppNavigation = () => {
  return (
    <Tabs.Navigator
      initialRouteName="home-tab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#F678BA',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#312C39',
          position: 'absolute',
          bottom: 5,
          borderTopColor: 'rgba(0, 0, 0, 0)',
        },
      }}
    >
      <Tabs.Screen
        name="home-tab"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Главная',
          tabBarIcon: ({ focused }) => (
            <View>
              <Icons.TabBarMain
              // style={{
              //   width: 25,
              //   height: 25,
              //   tintColor: focused ? '#F678BA' : '#FFFFFF',
              // }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="payments-tab"
        component={PaymentStackScreen}
        options={{
          tabBarLabel: 'Платежи',
          tabBarIcon: ({ focused }) => (
            <View>
              <Icons.TabBarPayment />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="ATM-tab"
        component={ATMSStackScreen}
        options={{
          tabBarLabel: 'Банкоматы',
          tabBarIcon: ({ focused }) => (
            <View>
              <Icons.TabBarBank />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile-tab"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Профиль',
          tabBarIcon: ({ focused }) => (
            <View>
              <Icons.TabBarProfile />
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
