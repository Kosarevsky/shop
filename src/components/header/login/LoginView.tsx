import React from 'react';
import { TokenRequestType } from '../../../types/tokenRequestType';

export type PropsType = {
    loading: boolean,
    error?: string,
    onSubmit: (data: TokenRequestType) => void;
}

const LoginView: React.FC<PropsType> = () => {
    return (
        <div>
            Login
        </div>
    );
};

export default LoginView;