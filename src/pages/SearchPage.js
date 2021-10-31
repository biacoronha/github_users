import { useState } from "react";
import SearchBar from "../components/SearchBar"

export default function SearchPage() {
    const [input, setInput] = useState('');
    
    return (
        <SearchBar
            input={input}
            setInput={setInput}
        />
    );
}