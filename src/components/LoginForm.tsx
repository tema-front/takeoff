import React, { Dispatch, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { loginAccount } from "../store/profile/actions";

// Компонент формы для входа в существующий аккаунта
export const LoginForm: FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const loginHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (email && password) dispatch(loginAccount(email, password));
    }

    const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    return (
        <form onSubmit={loginHandler} className="auth-form">
            <span className="auth-form-title">Login</span>
            <input onChange={emailChangeHandler} value={email} type="text" className="auth-form-input" placeholder="Email" />
            <input onChange={passwordChangeHandler} value={password} type="password" className="auth-form-input" placeholder="Password" />
            <button type="submit" className="auth-form-btn">Login</button>
        </form>
    );
}
