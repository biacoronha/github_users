import { useState } from 'react/cjs/react.development';
import UseFetch from '../helpers/UseFetch';
import RepositoryCard from '../components/RepositoryCard';
import Header from '../components/Header';
import './UserPage.css';

export default function UserPage(props) {
    const user = props.location.state.user
    const [repos, setRepos] = useState()
    console.log(user)
    //let repos = null;
    //console.log(user.login)
    // setRepos(UseFetch(user.repos_url))
    console.log(repos)

    if(!repos) {
        UseFetch(user.repos_url).then(repos => {
            setRepos(repos)
            console.log(repos)
        })
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
                    {repos ?
                        repos.map((repository, i) =>
                        <RepositoryCard repository={repository}/>)
                        :
                        <div>NO REPS</div>
                    }

                </div>
            </div>
        </main>
        </div>
    );
}
