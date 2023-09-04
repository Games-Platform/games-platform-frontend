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
  username?: string;
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

export interface IGame {
  id: number;
  added: number;
  background_image: string;
  description_raw: string;
  metacritic: number;
  name: string;
  platforms: {
    id: number;
    name: string;
    slug: string;
  }[];
  stores: {
    store: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
  rating: number;
  released: string;
  short_screenshots: { id: number; image: string }[];
  slug: string;
}

export interface IGames {
  count: number;
  next: string | null;
  previous: string | null;
  results: IGame[];
}

export interface ISearchParams {
  query: string | null;
}

export interface IGetSingleGame {
  id?: string;
}

export interface ISelectOption {
  value: string;
  label: string;
}
