const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", CliqueBotaoArquivo);

const inputNumberButton = document.getElementById("inputnumberbutton");
inputNumberButton.addEventListener("click", CliqueBotaoNumber);

function CliqueBotaoArquivo() {
    arquivo = document.getElementById("inputfile");

   
    var fr = new FileReader();
    var info 

    try {  

        if ((arquivo.files[0]) == null) {
            throw "Arquivo não localizado!" 
        }

        fr.readAsText(arquivo.files[0]); 

        fr.onload = function () {
             info = fr.result;

            console.log(`Informação do arquivo: ${info}`)
            document.getElementById('output').textContent = fr.result;

            if (info == "") { 
                throw 'Não foi possivel ler o arquivo selecionado'
            }
           

        }

        

    }

    catch (error) { 

        console.log(error)
        alert("Arquivo não localizado!")
        document.getElementById('output').textContent = "Arquivo não localizado";
    }

    finally {
        alert("Obrigado por nos visitar!")
    }


}

function CliqueBotaoNumber(){
    

try {
    
    valor_digitado = document.getElementById("inputnumber")
    valor_verificacao =  Number(valor_digitado.value)

    if(valor_digitado.value == "") throw 'Informe algum valor!'
    else if (valor_verificacao <= 5 || valor_verificacao >= 10) throw 'Informe um valor maior que 5 e menor que 10'

}

catch(error){
   
    document.getElementById("output-number").innerHTML = `Erro: ${error}`
    console.log(error)
    alert(`Erro: ${error}`)
}

finally {
   
    document.getElementById("output-number").innerHTML = `O valor digitado foi ${valor_digitado.value}`
}


}

