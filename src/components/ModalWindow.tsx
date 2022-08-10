import React, { FC } from "react";
import { IContact } from "../types/contacts";
import { AddNewContact } from "./AddNewContact";
import { EditContact } from "./EditContact";

interface ModalWindowProps {
    closeModalWindow: () => void;
    contactEditing: IContact
}

// Компонент модального окна. Служит для редактирования и добавления контактов
export const ModalWindow: FC<ModalWindowProps> = ({ closeModalWindow, contactEditing }) => {
    const handleCloseModalWindow = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget.id === 'overlay') closeModalWindow();
    }

    return (
        <div id="overlay" onClick={handleCloseModalWindow} className="modalwindow-overlay">
            <section onClick={e => e.stopPropagation()} className="modalwindow">
                {contactEditing.id
                    ? <EditContact closeModalWindow={closeModalWindow} contactEditing={contactEditing} />
                    : <AddNewContact closeModalWindow={closeModalWindow} />
                }
            </section>
        </div>
    );
}
