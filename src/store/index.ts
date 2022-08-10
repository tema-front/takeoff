import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { contactsReducer } from './contacts/reducer';
import { profileReducer } from './profile/reducer';
export type RootState = ReturnType<typeof store.getState>

const rootReducer = combineReducers({
    stateProfile: profileReducer,
    stateContacts: contactsReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)