import { SingleValue, ActionMeta } from 'react-select';

export const enum EnumSizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  DEFAULT = 'default',
}

export const enum EnumColors {
  ORANGE = 'orange',
  WHITE = 'white',
  BLACK = 'black',
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

export interface ILocalGame {
  game_id: string;
  background_image: string;
  metacritic: number;
  name: string;
  games_platform_rating: number;
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

export interface ISelectField {
  value: string | number;
  label: string;
}

export type TSelectOnChange = (
  newValue: SingleValue<ISelectField>,
  actionMeta: ActionMeta<ISelectField>,
) => void;

export const enum ECustomInputWidth {
  SMALL = '175px',
  MEDIUM = '250px',
}

export const enum EGameStatus {
  NOT_ADDED = 0,
  PLAYING_NOW = 1,
  PLAY_LATER = 2,
  FINISHED = 3,
}

export interface IUserGame {
  game: number;
  rating?: number;
  status?: EGameStatus;
}
export interface IVoteGame {
  game_id: number | undefined;
  value: number;
}
