import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export const TabBarPayment = ({ size = 24, color }: Props) => (
  <Svg width={size} height={size} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.75 17C19.3358 17 19 17.3358 19 17.75C19 18.1642 19.3358 18.5 19.75 18.5C21.2688 18.5 22.5 17.2688 22.5 15.75V5.75C22.5 4.23122 21.2688 3 19.75 3H3.75C2.23122 3 1 4.23122 1 5.75V15.75C1 17.2688 2.23122 18.5 3.75 18.5C4.16421 18.5 4.5 18.1642 4.5 17.75C4.5 17.3358 4.16421 17 3.75 17C3.05964 17 2.5 16.4404 2.5 15.75V5.75C2.5 5.05964 3.05964 4.5 3.75 4.5H19.75C20.4404 4.5 21 5.05964 21 5.75V15.75C21 16.4404 20.4404 17 19.75 17ZM11 11.75V18.9393L9.28033 17.2197C8.98744 16.9268 8.51256 16.9268 8.21967 17.2197C7.92678 17.5126 7.92678 17.9874 8.21967 18.2803L11.2197 21.2803C11.5126 21.5732 11.9874 21.5732 12.2803 21.2803L15.2803 18.2803C15.5732 17.9874 15.5732 17.5126 15.2803 17.2197C14.9874 16.9268 14.5126 16.9268 14.2197 17.2197L12.5 18.9393V11.75C12.5 11.3358 12.1642 11 11.75 11C11.3358 11 11 11.3358 11 11.75ZM5 7.75C5 7.33579 5.33579 7 5.75 7H17.75C18.1642 7 18.5 7.33579 18.5 7.75C18.5 8.16421 18.1642 8.5 17.75 8.5H5.75C5.33579 8.5 5 8.16421 5 7.75Z"
      fill={color || '#C2C1C6'}
    />
  </Svg>
);



