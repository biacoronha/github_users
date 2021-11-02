import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UseFetch from '../helpers/UseFetch';
import './SearchBar.css'

export default function SearchBar({input, setInput}) {
    const [user, setUser] = useState('')
    const [redirect, setRedirect] = useState(false)
    let test = null;

    async function searchUser(input) {
        setUser(await UseFetch(input))
        // const result = await UseFetch(input)
        // console.log(result)
        // console.log(typeof result)
        // setUserResult(result)
        // test = result
        // console.log(test)
        // setRedirect(true)
    }

    return (    //aumentar a altura e diminuir o comprimento?
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