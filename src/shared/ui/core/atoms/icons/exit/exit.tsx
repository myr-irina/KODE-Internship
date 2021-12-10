import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export const Exit = ({ size = 24, color }: Props) => (
  <Svg width={size} height={size} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.75 18a.75.75 0 0 0-.75-.75A3.25 3.25 0 0 1 2.75 14V7A3.25 3.25 0 0 1 6 3.75h12A3.25 3.25 0 0 1 21.25 7v7A3.25 3.25 0 0 1 18 17.25a.75.75 0 0 0 0 1.5A4.75 4.75 0 0 0 22.75 14V7A4.75 4.75 0 0 0 18 2.25H6A4.75 4.75 0 0 0 1.25 7v7A4.75 4.75 0 0 0 6 18.75a.75.75 0 0 0 .75-.75ZM12 12a.75.75 0 0 0-.75.75v7.409l-1.72-1.72A.75.75 0 1 0 8.47 19.5l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.72 1.719V12.75A.75.75 0 0 0 12 12Z"
      fill={color || '#706D76'}
    />
  </Svg>
);
