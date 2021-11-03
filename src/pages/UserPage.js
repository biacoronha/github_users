import { useState } from 'react/cjs/react.development';
import UseFetch from '../helpers/UseFetch';
import RepositoryCard from '../components/RepositoryCard';
import Header from '../components/Header';
import './UserPage.css';

export default function UserPage(props) {
    console.log(props)
    const user = props.location.state.user
    const [noRepos, setNoRepos] = useState(false)
    const [repos, setRepos] = useState(false)

    if(!repos) {
        try {
            UseFetch(user.repos_url).then(repos => {
                setRepos(repos)
                console.log(repos)
                console.log("yes")
            })
        }
        catch {
            console.log("no")
            setNoRepos(true)
        }
    }

    return(
        <div>
        <Header/>
        <main>
            <div className="main">
                <div className="user-data">
                    <div className="avatar">
                        <img src = {user.avatar_url} />
                    </div>
                    <section className="info">
                        <h2>{user.login}</h2>
                        <span>
                            <span className="num-repos">{user.public_repos}</span> Repositories
                        </span>
                        <h1>{user.name}</h1>
                    </section>
                </div>
                <div className="repos-card">
                    {(repos && repos.length > 0) ?
                        repos.map((repository, i) =>
                        <RepositoryCard repository={repository}/>)
                        :
                        <h1 className="no-repos">NO REPOSITORIES YET</h1>
                    }

                </div>
            </div>
        </main>
        </div>
    );
}
