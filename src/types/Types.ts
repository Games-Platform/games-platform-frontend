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

export type TSizes = EnumSizes.MEDIUM | EnumSizes.LARGE | EnumSizes.DEFAULT;
export type TColors = (typeof EnumColors)[keyof typeof EnumColors];
export type TLinkSizes = EnumSizes.SMALL | EnumSizes.MEDIUM;
