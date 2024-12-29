function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto') 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        foto.innerHTML = '<img id="imagem" src="imagens/manha.png" alt="foto do dia">'
        document.body.style.background = '#E8DDCA'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        foto.innerHTML = '<img id="imagem" src="imagens/tarde.png" alt="foto da tarde">'
       document.body.style.background = '#685646'
    } else {
        //BOA NOITE!  
        foto.innerHTML = '<img id="imagem" src="imagens/noite.png" alt="foto da noite">'
        document.body.style.background = '#0A0C07' 
    }
}

