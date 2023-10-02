async function postagem(){
    let postagem = document.querySelector('#postagem');
    let response = await fetch('https://restcountries.com/v3.1/currency/cop');
    //let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    //console.log(json[1]);
    if (json.length > 0) {
        postagem.innerHTML = "";
        for( let i in json){
            let postsHTML = '<div><h2>' + "Busca de Dados Via API. País: Colômbia."+" Latitude - " + json[i].latlng + " " +'</h2> <h3>'+ "Abreviatura de Companhia no País  - " + json[i].tld + "  " +'</h3> <h4>'+ 
            "Vários Dados -  " + json[i].altSpellings + "  " +'</h4> <h5>'+ "Fuso Horário - " + json[i].timezones+ "  " + '</h5> <h6>'+ 
            "Continente - " +json[i].continents + "  " + '</h6> <h6>'+ "Abreviaturas de Países do Continente -  " + json[i].borders + "  "   +'</h6> <h6>' + 
            "Bandeira - <img src = https://mainfacts.com/media/images/coats_of_arms/co.png>" + "  " + '</h6> </div>';
            postagem.innerHTML = postagem.innerHTML + postsHTML;
        }
    }else{  
        console.error;
        alert('Aldo está Errado!!!');
        postagem.innerHTML = 'Servidor Parou!!!';
    }
}
postagem();