function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum valor foi escrito.</p>"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";

    for (let piloto of pilotos) {
        titulo = piloto.titulo.toLowerCase();
        descricao = piloto.descricao.toLowerCase();
        if (piloto.titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
            <h3><a class=${piloto.class} href=${piloto.linkWiki} target="_blank">${piloto.titulo}</a></h3>
            <p class="descricao-meta">${piloto.descricao}</p>
            <a class=${piloto.class} href=${piloto.linkInsta} target="_blank">@${piloto.instagram}</a>    
            </div>
            `
        }
    };

    if (!resultados) {
        resultados = "<p>Nenhum piloto encontrado.</p>";
    }

    section.innerHTML = resultados
}