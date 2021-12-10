import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export const ChevronRight = ({ size = 24, color }: Props) => (
  <Svg width={size} height={size} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.845 7.095a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06l3.72-3.72-3.72-3.72a.75.75 0 0 1 0-1.06Z"
      fill={color || '#706D76'}
    />
  </Svg>
);
