import { ComponentProps, ReactNode, useContext } from 'react';
import { Typography } from '../../typography';
import { PaymentTemplate } from '../../templates';
import { PaymentList } from '../../organisms';

import { FlatList, Image } from 'react-native';
import { PaymentItem } from '../../molecules';
import { NavigationContainer } from '@react-navigation/native';
import { AppDataContext, Categories, Category } from '@shared/data/appdata';

export type TPaymentPage = {
  header: string;
  navigate: Function;
};

// export const PaymentPage = ({ header }: TPaymentPage) => {
//   const categories = useContext(AppDataContext);
//   return (
//     <PaymentTemplate
//       header={<Typography variant="title">{header}</Typography>}
//       menu={
//         <FlatList data={categories.category} renderItem={ <PaymentItem icon={
//           <Image
//                 source={{
//                   uri: category.category_icon,
//                 }}
//                 style={{ width: 40, height: 40 }}
//               />
//         } title={category.category_name}
//          onPress={onPress: () => {}}
//          keyExtractor={(categories.category) => categories.category_id}/>}
//          />
//       }
//     />
//   );
// };

export const PaymentPage = (props: TPaymentPage) => {
  const { header, navigate } = props;

  const pressHandler = (category: Category) => {
    navigate('paymentbyphone', category);
  };

  const categories = useContext(AppDataContext);
  return (
    <PaymentTemplate
      header={<Typography variant="title">{header}</Typography>}
      menu={
        <PaymentList
          items={categories.category.map(category => ({
            icon: (
              <Image
                source={{
                  uri: category.category_icon,
                }}
                style={{ width: 40, height: 40 }}
              />
            ),
            onPress: () => {
              pressHandler(category);
            },
            title: category.category_name,
          }))}
        />
      }
    />
  );
};
