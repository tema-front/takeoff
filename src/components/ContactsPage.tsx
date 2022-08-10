import { FC } from "react";
import { ContactsList } from "./ContactsList";
import { Header } from "./Header";

// Компонент страницы контактов
export const ContactsPage: FC = () => {
    return (
        <>
            <Header />
            <main className="content">
                <ContactsList />
            </main>
        </>
    );
}
