const nomes = ["Luiz", "Preto", "Sono", "Marcelo", "Amanda", "Douglas", "kirichima"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)