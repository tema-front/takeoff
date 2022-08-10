import React, { Dispatch, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../store/profile/actions";

// Компонент формы для создания аккаунта
export const CreateProfileForm: FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const createAccountHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (email && password && name) dispatch(createAccount(name, email, password));
    }

    return (
        <form onSubmit={createAccountHandler} className="auth-form">
            <span className="auth-form-title">Registration</span>
            <input onChange={nameChangeHandler} value={name} type="text" className="auth-form-input" placeholder="Name" />
            <input onChange={emailChangeHandler} value={email} type="text" className="auth-form-input" placeholder="Email" />
            <input onChange={passwordChangeHandler} value={password} type="password" className="auth-form-input" placeholder="Password" />
            <button type="submit" className="auth-form-btn">Create account</button>
        </form>
    );
}
