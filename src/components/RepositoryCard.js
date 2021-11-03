import './RepositoryCard.css'

export default function RepositoryCard(repository) {
    repository = repository.repository
    return (
        <article>
            <h2>{repository.name}</h2>
            <span>{repository.description}</span>
        </article>
    );
}
