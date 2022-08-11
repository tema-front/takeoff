import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearSearch, onSearch } from "../store/contacts/actions";

// Компонент формы для поиска контактов (доступен только при условии наличия контактов)
export const ContactsSearch: FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const dispatch = useDispatch();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(onSearch(searchValue.toLowerCase()))
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(e.target.value);
    }

    useEffect(() => {
        if (searchValue === '') {
            dispatch(clearSearch);
        }
    }, [searchValue, dispatch])

    return (
        <form className="search" onSubmit={submitHandler}>
            <input value={searchValue} onChange={changeHandler} type="search" className="search-input" placeholder="Name" />
            <button type="submit" className="search-btn">Search</button>
        </form>
    );
}
