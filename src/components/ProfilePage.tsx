import { FC } from "react";
import { Header } from "./Header";
import { CreateProfileForm } from "./CreateProfileForm";
import { LoginForm } from "./LoginForm";
import { useSelector } from "react-redux";
import { RootState } from "../store";

// Компонент страницы авторизации
export const ProfilePage: FC = () => {
    const authed = useSelector((state: RootState) => state.stateProfile.authed);
    const { name } = useSelector((state: RootState) => state.stateProfile.profile);

    return (
        <>
            <Header />
            <main className="content">
                <section className="auth">
                    <h3 className="auth-title">Authentication</h3>
                    <div className="auth-wrp">
                        {authed
                            ? <span className="auth-greeting">Hello, {name}!</span>
                            :
                            <>
                                <CreateProfileForm />
                                <span className="auth-greeting">Or</span>
                                <LoginForm />
                            </>
                        }
                    </div>
                </section>
            </main>
        </>
    );
}
