import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export const SearchIcon = ({ size = 24, color }: Props) => (
  <Svg width={size} height={size} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 15L18.5 18.5"
      fill={color || '#706D76'}
    />
  </Svg>
);


