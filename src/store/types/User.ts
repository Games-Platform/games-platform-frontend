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
