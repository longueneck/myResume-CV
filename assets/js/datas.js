/* Fazendo o fatch */

function getDatas() {
    return fetch('https://api.github.com/users/longueneck')
        .then(response => response.json())
        .then(data => {
            /* Dados do seu GitHub */
            console.log(data);
             /* exemplos de datas */
             /* quantos repositórios públcios você tem */
            console.log(data.public_repos);
            /* Seu nome */
          console.log(data.name);
        })    
              
}

getDatas();