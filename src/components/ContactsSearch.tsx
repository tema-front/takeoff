import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearSearch, onSearch } from "../store/contacts/actions";


export const ContactsSearch: FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const dispatch = useDispatch();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        debugger
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
            <input value={searchValue} onChange={changeHandler} type="text" className="search-input" placeholder="Name" />
            <button type="submit" className="search-btn">Search</button>
        </form>
    );
}
