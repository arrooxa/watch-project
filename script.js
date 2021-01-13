function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');

    var h = new Date();
    var hora = h.getHours();

    var m = new Date();
    var minutos = m.getMinutes();

    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    
    if(hora >= 0 && hora < 12){
        // BOM DIA!
        msg.innerHTML += `<p><b>Bom dia!</b></p>`
        img.src = './images/manha.png'
        document.body.style.background = '#dcab63'
    }else if(hora >= 12 && hora < 18){
        // BOA TARDE!
        msg.innerHTML += `<p><b>Boa tarde!</b></p>`
        img.src = './images/tarde.png'
        document.body.style.background = '#e26c15'
    }else{
        // BOA NOITE!
        msg.innerHTML += `<p><b>Boa noite!</b></p>`
        img.src = './images/noite.png'
        document.body.style.background = '#5b6064'
    }
}