import { useState } from "react";
import UseFetch from '../helpers/UseFetch';
import './SearchBar.css'

export default function SearchBar({input, setInput}) {

    async function searchUser(input) {
        const result = await UseFetch(input)
        console.log(result)
    }

    return (
        <div className="search">
            <input
                value={input}
                placeholder="Search for a GitHub username"
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={(e) => searchUser(input)}>Search</button>
        </div>
    );
}