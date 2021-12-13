import { Text, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProfilePage } from '@shared/ui/core/pages/profile-page/profile-page';
import { Icons, Typography } from '@shared/ui/core/atoms';
import styled from 'styled-components/native';
import { boolean } from '@storybook/addon-knobs';

const ScreenView = styled.View`
  flex: 1;
  background-color: ${props => props.theme.palette.background.primary};
  justify-content: center;
 
`;

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <ScreenView>
        <Typography>Главная</Typography>
      </ScreenView>
    </SafeAreaProvider>
  );
};

const PaymentScreen = () => {
  return (
    <SafeAreaProvider>
      <ScreenView>
        <Typography>Платежи</Typography>
      </ScreenView>
    </SafeAreaProvider>
  );
};

const ATMScreen = () => {
  return (
    <SafeAreaProvider>
      <ScreenView>
        <Typography>Банкоматы</Typography>
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

function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'home'} component={HomeScreen} />
    </Stack.Navigator>
  );
}

function PaymentStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'payment'} component={PaymentScreen} />
    </Stack.Navigator>
  );
}

function ATMSStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'ATM'} component={ATMScreen} />
    </Stack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'profile'} component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export const AppNavigation = () => {
  return (
    <Tabs.Navigator
      initialRouteName="home"
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
        name="home"
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
        name="payments"
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
        name="ATM"
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
        name="profile"
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
