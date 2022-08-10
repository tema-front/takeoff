import { FC } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { RootState } from "../store";
import { ContactsPage } from "./ContactsPage";
import { ProfilePage } from "./ProfilePage";

export const Router: FC = () => {
    const authed = useSelector((state: RootState) => state.stateProfile.authed);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<ProfilePage />} />
                {authed && <Route path='/contacts' element={<ContactsPage />} />}
                <Route path='*' element={<Navigate replace to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
}
