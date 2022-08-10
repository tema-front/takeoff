import { contactsAction, ContactsActionTypes, contactsState } from "../../types/contacts";

const initialState: contactsState = {
    contactsList: [],
    searchValue: ''
}

export const contactsReducer = (state = initialState, { type, payload }: contactsAction): contactsState => {

    switch (type) {
        case ContactsActionTypes.ADD_CONTACT: {
            return {
                ...state,
                contactsList: [...state.contactsList, { name: payload.name, number: payload.number, id: Date.now() }]
            }
        }

        case ContactsActionTypes.DELETE_CONTACT: {
            const newContactsList = state.contactsList.filter(contact => contact.id !== payload.id);

            return {
                ...state,
                contactsList: newContactsList
            }
        }

        case ContactsActionTypes.EDIT_CONTACT: {
            const indexContact = state.contactsList.findIndex(contact => contact.id === payload.id);
            let newContactList = [...state.contactsList]
            newContactList[indexContact].name = payload.newName
            newContactList[indexContact].number = payload.newNumber
            return {
                ...state,
                contactsList: newContactList
            }
        }

        case ContactsActionTypes.SEARCH: {
            return {
                ...state,
                searchValue: payload
            }
        }

        case ContactsActionTypes.CLEAR_SEARCH: {
            return {
                ...state,
                searchValue: ''
            }
        }

        default: return state;
    }
}