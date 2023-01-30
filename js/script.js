/* Regras de interações do formulário. 
01 - Envia o formulário somente se os campos nome e email estiverem preenchidos.
02 - Se um dos campos não estiver preenchido, não envia o formulário.
*/



     const botaoEnviar = document.getElementById("botaoEnviar");
     
     
     function validaFormulario () {
        if (document.getElementById("nome").value != "" &&
            document.getElementById ("email").value != "" &&
            document.getElementById("telefone").value !=""){
            alert("Pronto!Você receberá as novidades por e-mail.")
        }else{
            alert("Por favor, preencha todos os campos.")
        }
    };

     botaoEnviar.addEventListener("click", () => {
        validaFormulario()
     });


    


