import React from 'react';
import { StyledLogin } from './LogUser.styled';
import S from '../Header.styled';

const LogUser: React.FC = () => {
    return (
        <div>
            <S.link to="/login">
                <StyledLogin  />
            </S.link>
        </div>
    );
};

export default LogUser;