import { Dispatch } from "react";
import { IProfile, profileAction, ProfileActionTypes } from "../../types/profile";

export const LOGIN = 'LOGIN';

export const onLogin = (profile: IProfile) => ({
    type: LOGIN,
    payload: profile
})

export const createAccount = (name: string, email: string, password: string) => async (dispatch: Dispatch<profileAction>) => {
    try {
        await fetch(`http://localhost:3001/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email.toLowerCase(),
                password: password,
            })
        });
        dispatch({ type: ProfileActionTypes.LOGIN, payload: { name: name, email: email, password: password } })
    } catch (e) {
        alert('Error:' + e);
    }
}

export const loginAccount = (email: string, password: string) => async (dispatch: Dispatch<profileAction>) => {
    try {
        const response = await fetch(`http://localhost:3001/users?email=${email.toLowerCase()}&password=${password}`);
        let result = await response.json();
        result = { ...result[0] };
        if (!Object.keys(result).length) {
            alert("Invalid login or password");
            return;
        }
        dispatch({ type: ProfileActionTypes.LOGIN, payload: { name: result.name, email: result.email, password: result.password } })
    } catch (e) {
        alert('Error:' + e);
    }
}