import React from 'react';
import {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';

export type RowSectionProps = {
  children?: React.ReactNode | React.ReactNode[];
  fullWidth?: boolean;
  marginTop?: number;
};

export type FlexibleRowProps = RowSectionProps & {
  flexDirection:
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'
    | undefined;
};

export type AccordionItemProps = {
  children: React.ReactNode[];
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  marginY?: number;
};

export type AccordionProps = {
  children: React.ReactNode;
};

export type HomeScreenCarouselProps<T> = {
  data: T[];
  style?: StyleProp<ViewStyle> | undefined;
};

export type ButtonProps = {
  title: string;
  variant?: 'primary' | 'secondary';
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  style?: StyleProp<ViewStyle> | undefined;
};

export type IconButtonProps = {
  icon: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

export type CarouselProps<T> = {
  data: T[];
};

export type ListOptionItemProps = {
  title: string;
  selectedOption?: any;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

export type ListOptionItemWithIconProps = {
  title: string;
  iconPercentage: number;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

export type CategoryItemProps = {
  label: string;
  icon: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

export type FaqListDataType = {
  id: number;
  title: string;
  icon: string;
};

export type RectionTransactionDataType = {
  name: string;
  amount: number;
  status: string;
  transactionID: number;
};

export type TransactionSectionProps<T> = {
  transactions: T[];
};

// Define an arbitray number of keys whose return type is a number
export type AssetAllocationType = {
  [key: string]: number;
};

export type PortfolioDataType = {
  id: number;
  title: string;
  assetAllocation: AssetAllocationType;
};

export type HomeCarouselDataType = {
  source: string;
  title: string;
  description: string;
};

// mock data types
export type FamilyCarouselDataType = {
  title: string;
  amount: number;
  currency: string;
};
