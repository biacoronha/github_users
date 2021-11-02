import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import UseFetch from '../helpers/UseFetch';
import * as Constants from "../helpers/Constants";
import './SearchBar.css'

export default function SearchBar({input, setInput}) {
    const [user, setUser] = useState('')

    async function searchUser(input) {
        const url = Constants.BASE_URL + Constants.USER + input;

        setUser(await UseFetch(url))
    }

    return (
        <div>
        {user ? <Redirect to={{pathname:"/user", state: {user: user}}}/> :
        <div className="search">
            <div className="search-input">
                <input
                    value={input}
                    placeholder="Search for a GitHub username"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={(e) => searchUser(input)}>Search</button>
            </div>
        </div>
    }
        </div>

    );
}