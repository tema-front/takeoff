export interface contactsState {
    contactsList: IContact[],
    searchValue: string
}

export enum ContactsActionTypes {
    ADD_CONTACT = 'ADD_CONTACT',
    DELETE_CONTACT = 'DELETE_CONTACT',
    EDIT_CONTACT = 'EDIT_CONTACT',
    SEARCH = 'SEARCH',
    CLEAR_SEARCH = 'CLEAR_SEARCH'
}

interface AddContact {
    type: ContactsActionTypes.ADD_CONTACT;
    payload: IContact
}

interface DeleteContact {
    type: ContactsActionTypes.DELETE_CONTACT;
    payload: IContact
}

interface EditContact {
    type: ContactsActionTypes.EDIT_CONTACT;
    payload: { newName: string, newNumber: number, id: number }
}

interface OnSearch {
    type: ContactsActionTypes.SEARCH;
    payload: string
}

interface ClearSearch {
    type: ContactsActionTypes.CLEAR_SEARCH;
    payload?: string
}


export type contactsAction = AddContact | DeleteContact | OnSearch | ClearSearch | EditContact;

export interface IContact {
    id: number;
    name: string;
    number: number
}