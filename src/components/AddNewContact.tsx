import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../store/contacts/actions";

interface AddNewContactInterface {
    closeModalWindow: () => void;
}

export const AddNewContact: FC<AddNewContactInterface> = ({ closeModalWindow }) => {
    const dispatch = useDispatch();
    const [newContactName, setNewContactName] = useState<string>('');
    const [newContactNumber, setNewContactNumber] = useState<number>(); // fix undefined

    const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNewContactName(e.target.value);
    }

    const numberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNewContactNumber(e.target.valueAsNumber);
    }


    const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!newContactName || !newContactNumber) return;
        dispatch(addContact({ name: newContactName, number: newContactNumber, id: Date.now() }))
        closeModalWindow();
    }

    return (
        <>
            <h4 className="modalwindow-title">Create new contact</h4>
            <form className="modalwindow-form" onSubmit={submitHandler}>
                <input value={newContactName} onChange={nameChangeHandler} type="text" className="modalwindow-input" placeholder="Name" />
                <input value={newContactNumber} onChange={numberChangeHandler} type="number" className="modalwindow-input" placeholder="Number" />
                <div className="modalwindow-btns">
                    <button onClick={closeModalWindow} className="modalwindow-form-btn">Cancel</button>
                    <button className="modalwindow-form-btn" type="submit">Add</button>
                </div>
            </form>
        </>
    );
}