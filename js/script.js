window.addEventListener("scroll", ()=>{
    const alturaPagina = document.documentElement.scrollHeight;
    const meio = alturaPagina / 2;
    const posicaoRolagem = window.scrollY;

    if (posicaoRolagem > meio) {
        document.body.style.backgroundImage = "url('image/loby5.jpg')";
    }
    else{
        document.body.style.backgroundImage = "url('image/loby7.jpg')";
    }
}) 
 