function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança!
                img.setAttribute('src', 'imagens/foto-crianca-m.png')
            } else if (idade >= 10 && idade < 21) {
                // Jovem!
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade >= 21 && idade < 50) {
                // Adulto!
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else if (idade >= 50 && idade < 100) {
                //Idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
         } else if (fsex[1].ckecked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança!
                img.setAttribute('src', 'imagens/foto-crianca-f.png')
            } else if (idade >= 10 && idade < 21) {
                // Jovem!
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade >= 21 && idade < 50) {
                // Adulto!
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else if (idade >= 50 && idade < 100) {
                //Idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}

