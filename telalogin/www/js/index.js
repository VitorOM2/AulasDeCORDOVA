function realizaLogin()
{
    let usuario=document.getElementById("fnome").value;
    let senha=document.getElementById("fsenha").value;

    let usuarioValido="Usuario";
    let senhaValido="senha123";

    if ((usuario==usuarioValido)&&(senha==senhaValido))
    {
        alert("Bem Vindo");
    }
    else
    {
        alert ("Usuario ou senha errados");
    }
}

