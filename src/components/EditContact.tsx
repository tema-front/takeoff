import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { editContact } from "../store/contacts/actions";
import { IContact } from "../types/contacts";

interface EditContactInterface {
    closeModalWindow: () => void;
    contactEditing: IContact
}

export const EditContact: FC<EditContactInterface> = ({ closeModalWindow, contactEditing }) => {
    const dispatch = useDispatch();

    const [newContactName, setNewContactName] = useState<string>(contactEditing.name);
    const [newContactNumber, setNewContactNumber] = useState<number>(contactEditing.number);

    const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNewContactName(e.target.value);
    }

    const numberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNewContactNumber(e.target.valueAsNumber);
    }


    const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!newContactName || !newContactNumber) return;
        // dispatch(editContact(newContactName, newContactNumber, 2))
        dispatch(editContact(newContactName, newContactNumber, contactEditing.id))
        closeModalWindow();
    }

    return (
        <>
            <h4 className="modalwindow-title">Edit contact</h4>
            <form className="modalwindow-form" onSubmit={submitHandler}>
                <input value={newContactName} onChange={nameChangeHandler} type="text" className="modalwindow-input" placeholder="Name" />
                <input value={newContactNumber} onChange={numberChangeHandler} type="number" className="modalwindow-input" placeholder="Number" />
                <div className="modalwindow-btns">
                    <button onClick={closeModalWindow} className="modalwindow-form-btn">Cancel</button>
                    <button className="modalwindow-form-btn" type="submit">Save</button>
                </div>
            </form>
        </>
    );
}