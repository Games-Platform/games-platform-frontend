import { ILoginUser, IMessage, IRegisterUser, IUser } from '@/types/Types';
import apiService from './api';

export const authService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<IMessage, IRegisterUser>({
      // <ReturnTypes, ArgumentTypes>
      query: (body) => ({
        url: 'auth/register',
        method: 'post',
        body,
      }),
    }),
    loginUser: builder.mutation<IMessage, ILoginUser>({
      query: (body) => ({
        url: 'auth/login',
        method: 'post',
        body,
      }),
    }),
    refreshToken: builder.mutation<{ status: string }, null>({
      query: () => ({
        url: 'auth/refresh',
        method: 'post',
      }),
    }),
    checkUser: builder.query<IUser, null>({
      query: () => ({
        url: 'auth/profile',
        method: 'get',
      }),
    }),
    logout: builder.mutation<IMessage, null>({
      query: () => ({
        url: 'auth/logout',
        method: 'post',
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useRefreshTokenMutation,
  useCheckUserQuery,
  useLogoutMutation,
} = authService;
