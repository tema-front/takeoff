import { FC, useState } from "react";
import { ContactsItem } from "./ContactsItem";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ContactsSearch } from "./ContactsSearch";
import { ModalWindow } from "./ModalWindow";
import { IContact } from "../types/contacts";

// Компонент списка контактов
export const ContactsList: FC = () => {
    const [modalWindow, setModalWindow] = useState<boolean>(false);
    const [contactEditing, setContactEditing] = useState<IContact>({ name: '', number: 0, id: 0 });
    const contactsList = useSelector((state: RootState) => state.stateContacts.contactsList);
    const searchValue = useSelector((state: RootState) => state.stateContacts.searchValue);

    const showModalWindow = (): void => {
        setModalWindow(true);
    }

    const showEditingModalWindow = (contact: IContact): void => {
        setModalWindow(true);
        setContactEditing(contact)
    }

    const closeModalWindow = (): void => {
        setModalWindow(false);
        setContactEditing({ name: '', number: 0, id: 0 })
    }

    return (
        <>
            <section className="contacts">
                <div className="contacts-title-wrp">
                    <h3 className="contacts-title">My contacts list</h3>
                    <button onClick={showModalWindow} className="contacts-btn-new">New contact</button>
                </div>
                {contactsList.length ? <ContactsSearch /> : <span className="contacts-warning">You don't have any contacts yet</span>}
                <ul className="contacts-list">
                    {contactsList.filter(
                        contact => (contact.name).toLowerCase().includes(searchValue)
                    ).map(
                        contact => <ContactsItem key={contact.id} contact={contact} showEditingModalWindow={(contact) => showEditingModalWindow(contact)} />
                    )
                    }
                </ul>
            </section>
            {modalWindow && <ModalWindow closeModalWindow={closeModalWindow} contactEditing={contactEditing} />}
        </>
    );
}