import { Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProfilePage } from '@shared/ui/core/pages/profile-page/profile-page';
import { Icons } from '@shared/ui/core/atoms';
import styled from 'styled-components/native';

const ScreenView = styled.View`
  flex: 1;
  background-color: ${props => props.theme.palette.background.primary};
  justify-content: center;
`;

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home">
        {props => (
          <SafeAreaProvider>
            <ScreenView {...props}>
              <Text>Open up App.tsx to start working on your app!</Text>
              <Text>{JSON.stringify(process.env)}</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('profile')}
              >
                <Text>Go to profile!</Text>
              </TouchableOpacity>
            </ScreenView>
          </SafeAreaProvider>
        )}
      </Stack.Screen>
      <Stack.Screen name="profile">
        {props => (
          <SafeAreaProvider>
            <ScreenView {...props}>
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
                tabbar={{
                  items: [
                    {
                      title: 'Настройки',
                      icon: <Icons.TabBarMain />,
                      onPress: () => null,
                    },
                    {
                      title: 'Платежи',
                      icon: <Icons.TabBarPayment />,
                      onPress: () => null,
                    },
                    {
                      title: 'Банкоматы',
                      icon: <Icons.TabBarBank />,
                      onPress: () => null,
                    },
                    {
                      title: 'Профиль',
                      icon: <Icons.TabBarProfile />,
                      onPress: () => null,
                    },
                  ],
                }}
              />
            </ScreenView>
          </SafeAreaProvider>
        )}
      </Stack.Screen>
      <Stack.Screen name="ATM">
        {props => (
          <SafeAreaProvider>
            <ScreenView {...props}>
              <Text>Банкоматы</Text>
            </ScreenView>
          </SafeAreaProvider>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
