import React from 'react';
import LoginView from './LoginView';
import { TokenRequestType } from '../../../types/tokenRequestType';
import { useAppSelector } from '../../../store/store';

const LoginPage: React.FC = () => {

  const isLoading = useAppSelector(state => state.auth.isLoading);

  return (
    <LoginView
      loading={false}
      error={false}
      onSubmit={function (data: TokenRequestType): void {
        throw new Error('Function not implemented.');
      }} />
  );

};



export default LoginPage;