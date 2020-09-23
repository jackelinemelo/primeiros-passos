function checarSePodeDirigir (idade){
    let idade = prompt ("Informe sua idade?");

    if (idade > 18){
        alert ("Já pode dirigir!");
    }else {
        alert ("Ainda não pode dirigir!");
    }
    
}

checarSePodeDirigir ();