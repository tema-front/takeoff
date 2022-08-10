import { profileAction, ProfileActionTypes, profileState } from "../../types/profile";

const initialState: profileState = {
    authed: false,
}


export const profileReducer = (state = initialState, { type }: profileAction): profileState => {

    switch (type) {
        case ProfileActionTypes.LOGIN: {
            return {
                ...state,
                authed: true
            }
        }


        default: return state;
    }
}