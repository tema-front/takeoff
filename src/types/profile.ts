export interface profileState {
    authed: boolean,
    profile: IProfile
}

export enum ProfileActionTypes {
    LOGIN = 'LOGIN'
}

interface Login {
    type: ProfileActionTypes.LOGIN;
    payload: IProfile
}

export type profileAction = Login;

export interface IProfile {
    name: string,
    email: string,
    password: string
}
