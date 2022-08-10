import { IContact } from "../../types/contacts";

export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const SEARCH = 'SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const addContact = (contact: IContact) => ({
    type: ADD_CONTACT,
    payload: contact
})

export const deleteContact = (contact: IContact) => ({
    type: DELETE_CONTACT,
    payload: contact
})

export const editContact = (newName: string, newNumber: number, id: number) => ({
    type: EDIT_CONTACT,
    payload: { newName, newNumber, id }
})

export const onSearch = (value: string) => ({
    type: SEARCH,
    payload: value
})

export const clearSearch = {
    type: CLEAR_SEARCH,
}

