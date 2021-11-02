import { useState } from 'react/cjs/react.development';
import UseFetch from '../helpers/UseFetch';
import RepositoryCard from '../components/RepositoryCard';
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
        <main>
            <div className="main">
                <div className="user-data">
                    <div className="avatar">
                        <img src = {user.avatar_url} />
                    </div>
                    <section className="info">
                        <div>{user.login}</div>
                        <div>{user.public_repos}</div>
                        <div>{user.name}</div>
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
    );
}
