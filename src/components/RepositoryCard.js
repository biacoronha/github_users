import './RepositoryCard.css'

export default function RepositoryCard(repository) {
    repository = repository.repository
    console.log(repository)
    return (
        <article>
            <div>{repository.name}</div>
            <div>{repository.description}</div>
        </article>
    );
}
