import { useState } from "react";
import SearchBar from "../components/SearchBar"
import './SearchPage.css'

export default function SearchPage() {
    const [input, setInput] = useState('');
    
    return (
        <div className="main-section">
            <h1>To search for a GitHub user, type in the username</h1>
            <SearchBar
                input={input}
                setInput={setInput}
            />
        </div>
    );
}