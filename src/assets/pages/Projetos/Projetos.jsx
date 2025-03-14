import * as P from "./Projetos.styled.jsx";
import React from "react";

export default function Projetos() {
    const [repos, setRepos] = React.useState([]);

    React.useEffect(() => {
        // Fetch na API do GitHub
        fetch("https://api.github.com/users/josueeng/repos")
            .then((response) => response.json())
            .then((data) => {
                // Filtro para ocultar repositórios específicos
                const filteredRepos = data.filter(
                    (repo) => repo.name !== "josueeng" && repo.name !== "MyProfile"
                );
                setRepos(filteredRepos);
            })
            .catch((error) => console.error("Erro ao buscar os dados:", error));
    }, []);

    return (
        <P.Container>
            <P.Title>Meus Repositórios</P.Title>
            <P.RepoList>
                {repos.map((repo) => (
                    <P.RepoCard key={repo.id}>
                        <h3>{repo.name}</h3>
                        <p>{repo.description || "Sem descrição"}</p>
                        <P.RepoLink href={repo.html_url} target="_blank">
                            Ver no GitHub
                        </P.RepoLink>
                    </P.RepoCard>
                ))}
            </P.RepoList>
        </P.Container>
    );
}
