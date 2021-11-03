import './RepositoryCard.css'

export default function RepositoryCard(repository) {
    repository = repository.repository
    return (
        <a href={repository.html_url}>
            <article>
                <h2>{repository.name}</h2>
                <span>{repository.description}</span>
            </article>
        </a>  
    );
}
