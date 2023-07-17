export const enum EnumSizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  DEFAULT = 'default',
}

export const enum EnumColors {
  ORANGE = 'orange',
  WHITE = 'white',
}

export type TSizes = (typeof EnumSizes)[keyof typeof EnumSizes];
export type TColors = (typeof EnumColors)[keyof typeof EnumColors];
export type TLinkSizes = EnumSizes.SMALL | EnumSizes.MEDIUM;
