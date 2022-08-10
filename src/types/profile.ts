export interface profileState {
    authed: boolean
}

export enum ProfileActionTypes {
    LOGIN = 'LOGIN'
}

interface Login {
    type: ProfileActionTypes.LOGIN;
}

export type profileAction = Login;
