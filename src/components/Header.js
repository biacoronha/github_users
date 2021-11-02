import { Redirect } from 'react-router';
import { useState } from 'react/cjs/react.development';
import './Header.css'

export default function Header() {
    const [redirect, setRedirect] = useState(false)

    return(
        <div>
            {redirect ? <Redirect to="/"/> : 
            <header>
                <div className="logo" onClick={() => setRedirect(true)}>
                    Logo
                </div>
            </header>
            }
        </div>
    );
}