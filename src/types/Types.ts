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

export type TButtonSizes =
  | EnumSizes.MEDIUM
  | EnumSizes.LARGE
  | EnumSizes.DEFAULT;

export type TColors = (typeof EnumColors)[keyof typeof EnumColors];
export type TLinkSizes = EnumSizes.SMALL | EnumSizes.MEDIUM;

export interface IUser {
  id: number;
  email: string;
  username: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IRegisterUser {
  username: string;
  email: string;
  password: string;
}

export interface Inputs {
  email: string;
  username?: string;
  password: string;
}

export interface IError {
  status: number;
  data: {
    message: string;
    error: string;
    statusCode: number;
  };
}
