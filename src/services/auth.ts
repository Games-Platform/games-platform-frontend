import { ILoginUser, IRegisterUser, IUser } from '@/store/types/User';
import apiService from './api';

export const authService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (body: IRegisterUser) => ({
        url: 'auth/register',
        method: 'post',
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: (body: ILoginUser) => ({
        url: 'auth/login',
        method: 'post',
        body,
      }),
    }),
    checkUser: builder.query<IUser, null>({
      query: () => ({
        url: 'auth/profile',
        method: 'get',
      }),
    }),
    logout: builder.mutation({
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
  useCheckUserQuery,
  useLogoutMutation,
} = authService;
