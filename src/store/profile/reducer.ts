import { profileAction, ProfileActionTypes, profileState } from "../../types/profile";

const initialState: profileState = {
    authed: false,
    profile: {
        name: '',
        email: '',
        password: ''
    }
}


export const profileReducer = (state = initialState, { type, payload }: profileAction): profileState => {
    switch (type) {
        case ProfileActionTypes.LOGIN: {
            return {
                ...state,
                authed: true,
                profile: { name: payload.name, email: payload.email, password: payload.password }
            }
        }
        default: return state;
    }
}