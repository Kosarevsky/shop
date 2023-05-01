import React from 'react';
import { TokenRequestType } from '../../../types/tokenRequestType';

export type PropsType = {
    loading: boolean,
    error: boolean,
    onSubmit: (data: TokenRequestType) => void;
}

const LoginView: React.FC<PropsType> = () => {
    return (
        <div>
            
        </div>
    );
};

export default LoginView;