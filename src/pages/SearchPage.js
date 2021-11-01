import { useState } from "react";
import SearchBar from "../components/SearchBar"

export default function SearchPage() {
    const [input, setInput] = useState('');
    
    return (
        <SearchBar  //adicionar imagem de fundo e header?
            input={input}
            setInput={setInput}
        />
    );
}