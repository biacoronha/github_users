import './SearchBar.css'

export default function SearchBar({input, setInput}) {

    function handleChange(event) {
        setInput(event.target.value)
    }

    return (
        <div className="search">
            <input
                value={input}
                placeholder="Search for a GitHub username"
                onChange={handleChange}
            />
            <button onClick={() => this.showUserResult(input)}>Search</button>
        </div>
    );
}