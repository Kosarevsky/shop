import React from 'react';
import LoginView from './LoginView';
import { TokenRequestType } from '../../../types/tokenRequestType';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { authActions } from '../../../store/settings/authSlice';

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.auth.isLoading)
  const error = useAppSelector((state) => state.auth.error)

  const onSubmit = (data: TokenRequestType) => dispatch(authActions.createTokens(data))
  return (
    <LoginView
      loading={isLoading}
      error={error}
      onSubmit={onSubmit}
    />
  );
};

export default LoginPage;