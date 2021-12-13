import {
  StrictMode,
  ReactNode,
  useState,
  createContext,
  useEffect,
} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { AppThemeProvider, styled } from '@shared/ui/theme';
import { AppNavigation } from '@pages/ui';

const StorybookButton = styled.TouchableOpacity`
  height: 32px;
  padding: ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.button.primary};
`;
const StorybookButtonText = styled.Text`
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
`;

const customFonts = {
  SF_PRO_BOLD_700: require('../../../assets/fonts/SFProDisplay-Bold.ttf'),
  SF_PRO_SEMIBOLD_600: require('../../../assets/fonts/SFProDisplay-Semibold.ttf'),
  SF_PRO_MEDIUM_500: require('../../../assets/fonts/SFProDisplay-Medium.ttf'),
  SF_PRO_REGULAR_400: require('../../../assets/fonts/SFProDisplay-Regular.ttf'),
};

type Props = {
  storybookUI?: ReactNode;
};

export const AppDataContext = createContext({ category: [] } as Categories);

export interface Categories {
  category: {
    category_id: string;
    category_name: string;
    category_icon: string;
    services: {
      service_id: string;
      service_name: string;
      service_icon: string;
    }[];
  }[];
}

export const App = ({ storybookUI }: Props) => {
  const [isFontsLoaded] = useFonts(customFonts);
  const [isStorybookClosed, setStorybookClosed] = useState(false);
  const [data, setData] = useState<Categories>({ category: [] } as Categories);

  // загружаем из api через юзэффект данные, мы кладем данные в переменнную data
  useEffect(() => {
    fetch('https://github.com/kode-frontend/files/raw/main/categories.json')
      .then(res => {
        return res.json();
      })
      .then(data => {
        //валидация throw
        setData(data as Categories);
        console.log(data);
      })
      .catch(err => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  },[]);

  if (!isFontsLoaded) {
    return <AppLoading />;
  }

  if (storybookUI && !isStorybookClosed) {
    return (
      <StrictMode>
        <AppThemeProvider>
          {storybookUI}
          <StorybookButton onPress={() => setStorybookClosed(true)}>
            <StorybookButtonText>OPEN APP</StorybookButtonText>
          </StorybookButton>
        </AppThemeProvider>
      </StrictMode>
    );
  }

  return (
    <StrictMode>
      <AppThemeProvider>
        <AppDataContext.Provider value={data}>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </AppDataContext.Provider>
      </AppThemeProvider>
    </StrictMode>
  );
};
