function validar_preenchimento(inicio, fim, passo) {    
    // verifica se o valor de inicio, fim e passo é NaN (não numérico) e se está vazio.
    if (isNaN(inicio) || isNaN(fim) || isNaN(passo) ) {
        alert("Preencha os campos!")
        return false;        
    }else{
        return true;     
        
    }        
}

function contar() {
    let inicio = Number.parseInt(document.getElementById("num_inicio").value); 
    let fim = Number.parseInt(document.getElementById("num_fim").value); 
    let passo = Number.parseInt(document.getElementById("num_passo").value);
    let resul = document.getElementById("exibir_resultado");   

    if (!validar_preenchimento(inicio, fim, passo)) {
        return;    
    } 

    if (inicio >= fim) {
        alert("Contagem impossível!")
    }    
    else{
        if (passo == 0) {
            alert("Passo inválido! Considerando Passo 1")
            passo = 1
        }
        resul.innerHTML = "Contando: <br>";
        for(let i = inicio; i < fim+1; i+=passo){
            // console.log(i)
            resul.innerHTML += `${i}👉🏽`; 
        }
        resul.innerHTML += `🏁`; 
    }

}

function main() {
    let botao_contar = document.getElementById("botao_contar");
    botao_contar.addEventListener("click",contar);   //Se botão for clicado chama a função contar
}

// Principal
main();