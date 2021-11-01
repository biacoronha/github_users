import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import UseFetch from '../helpers/UseFetch';
import './SearchBar.css'

export default function SearchBar({input, setInput}) {
    const [redirect, setRedirect] = useState(false)

    async function searchUser(input) {
        const result = await UseFetch(input)
        setRedirect(true)
        console.log(result)
    }

    return (    //aumentar a altura e diminuir o comprimento?
        <div>
        {redirect ? <Redirect to="/user" /> :
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