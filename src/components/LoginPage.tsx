import { FC } from "react";
import { useDispatch } from "react-redux";
import { onLogin } from "../store/profile/actions";
import { Header } from "./Header";

interface LoginPageProps {

}

export const LoginPage: FC<LoginPageProps> = () => {
    const dispatch = useDispatch();

    const loginHandler = (): void => {
        dispatch(onLogin)
    }

    return (
        <>
            <Header />
            <div>Login Page!</div>
            <button onClick={loginHandler}>Login</button>
        </>
    );
}
