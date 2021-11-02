import { Redirect } from 'react-router';
import { useState } from 'react/cjs/react.development';
import './Header.css'

export default function Header() {
    const [redirect, setRedirect] = useState(false)

    return(
        <div>
            {redirect ? <Redirect to="/"/> : 
            <header>
                <div className="home" onClick={() => setRedirect(true)}>
                    Home
                </div>
            </header>
            }
        </div>
    );
}