import { FC } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../store/contacts/actions";
import { IContact } from "../types/contacts";

interface ContactsItemProps {
    contact: IContact,
    showEditingModalWindow: (contact: IContact) => void
}

// Компонент одного контакта. Имеет функционал редактирования и удаления (Процесс происходит через компонент модального окна)
export const ContactsItem: FC<ContactsItemProps> = ({ contact, showEditingModalWindow }) => {
    const dispatch = useDispatch();
    return (
        <div className="contacts-list-item">
            <span className="contacts-list-item-txt">{contact.name}: {contact.number}</span>
            <div className="contacts-list-item-managment">
                <button onClick={() => showEditingModalWindow(contact)} className="contacts-list-item-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.438 16.873l-1.438 7.127 7.127-1.437 16.874-16.872-5.69-5.69-16.873 16.872zm1.12 4.572l.722-3.584 2.86 2.861-3.582.723zm18.613-15.755l-13.617 13.617-2.86-2.861 13.617-13.617 2.86 2.861z" /></svg>
                </button>
                <button onClick={() => dispatch(deleteContact(contact))} className='contacts-list-item-btn'>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z" /></svg>
                </button>
            </div>
        </div>
    );
}