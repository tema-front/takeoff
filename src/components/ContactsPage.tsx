import { FC } from "react";
import { ContactsList } from "./ContactsList";
import { Header } from "./Header";

interface ContactsPageProps {

}

export const ContactsPage: FC<ContactsPageProps> = () => {
    return (
        <>
            <Header />
            <main className="content">
                <ContactsList />
            </main>
        </>
    );
}
