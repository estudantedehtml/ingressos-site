function inteira() {



    var container = document.getElementById('container')
    var qtd = document.getElementById('qtd')
    qtd = Number((qtd.value)) 
    var ingressos = 1
    var eles = document.getElementById('eles')
    var confirm = window.confirm(`Você irá emitir ${qtd} ingressos, tem certeza ?`)

    var total = document.getElementById('total')
    var preço = Number(24)
    var conta1 = qtd * preço



////variaveis






    
    var filme1 = ''
    var titulo = document.getElementsByName('q1')

if(titulo[0].checked) {

        filme1 = 'Doutor Estranho'

if (confirm == true){

var disable = document.getElementById('bloquear') 

disable.setAttribute("disabled" , "disabled")

    while (ingressos <= qtd) {

    var textoIngresso = document.createElement('div')

    textoIngresso.innerHTML = ingressos

    var  ingresso = document.createElement('div')

    ingresso.appendChild(textoIngresso)

    container.appendChild(ingresso)

    console.log(`ingresso ${ingressos}`)

    ingressos++  

    ingresso.setAttribute('id' , 'eles')

    ingresso.innerHTML += `<p style="padding-bottom:15px;">${filme1}</p>`

    ingresso.innerHTML += '<p style="padding-bottom:15px;">entrada-inteira</p>'

    ingresso.innerHTML += `<p>.valido.</p>`

    }  

    total.innerHTML += `<p> O total de ${qtd} inteiras foi = R$${conta1} reais</p>`

} else {

}

if (qtd > 7) {
    alert ('!![--ERRO--] Você adicionou um numero invalido de ingressos!!')
    var ok = window.confirm('aperte "ok" ou "calcel" para atualizar')
    if (ok == true) {
        location.reload()
    } else {
        location.reload()
    }
    
}

var preço = Number(20)

if (ingressos > 6 || qtd == 0) {
    location.reload()
}



} else if (titulo[1].checked) {
    filme1 = 'Jurassic World'
    if (confirm == true){

        var disable = document.getElementById('bloquear') 
        
        disable.setAttribute("disabled" , "disabled")
        
            while (ingressos <= qtd) {
        
            var textoIngresso = document.createElement('div')
        
            textoIngresso.innerHTML = ingressos
        
            var  ingresso = document.createElement('div')
        
            ingresso.appendChild(textoIngresso)
        
            container.appendChild(ingresso)
        
            console.log(`ingresso ${ingressos}`)
        
            ingressos++  
        
            ingresso.setAttribute('id' , 'eles')
        
    ingresso.innerHTML += `<p style="padding-bottom:15px;">${filme1}</p>`

    ingresso.innerHTML += '<p style="padding-bottom:15px;">entrada-inteira</p>'

    ingresso.innerHTML += `<p>.valido.</p>`

            }
            total.innerHTML += `<p> O total de ${qtd} inteiras foi = R$${conta1} reais</p>`
    } 

    var preço = Number(26)

if (ingressos > 6 || qtd == 0) {
    location.reload()
}

} else if (titulo[2].checked){
    filme1 = 'Sonic 2'
    if (confirm == true){

        var disable = document.getElementById('bloquear') 
        
        disable.setAttribute("disabled" , "disabled")
        
            while (ingressos <= qtd) {
        
            var textoIngresso = document.createElement('div')
        
            textoIngresso.innerHTML = ingressos
        
            var  ingresso = document.createElement('div')
        
            ingresso.appendChild(textoIngresso)
        
            container.appendChild(ingresso)
        
            console.log(`ingresso ${ingressos}`)
        
            ingressos++  
        
            ingresso.setAttribute('id' , 'eles')

            ingresso.innerHTML += `<p style="padding-bottom:15px;">
            ${filme1}</p>`

            ingresso.innerHTML += '<p style="padding-bottom:15px;">entrada-inteira</p>'
        
            ingresso.innerHTML += `<p>.valido.</p>`
        
            }
            total.innerHTML += `<p> O total de ${qtd} inteiras foi = R$${conta1} reais</p>`
    } 
    
}
if (ingressos > 6 || qtd == 0) {
    location.reload()
}
}




function meia() {


    var container = document.getElementById('container')
    var qtd = document.getElementById('qtd')
    qtd = Number((qtd.value)) 
    var ingressos = 1
    var eles = document.getElementById('eles')

    var confirm = window.confirm(`Você irá emitir ${qtd} ingressos, tem certeza ?`)
    var total = document.getElementById('total')
    var preço = Number(12.50)
    var conta2 = qtd * preço


    var filme1 = ''
    var titulo = document.getElementsByName('q1')

    if(titulo[0].checked) {

        filme1 = 'Doutor estranho'

if (confirm == true){  

    var disable = document.getElementById('bloquearm') 

    disable.setAttribute("disabled" , "disabled")

    while (ingressos <= qtd) {

    var textoIngresso = document.createElement('div')

    textoIngresso.innerHTML = ingressos

    var  ingresso = document.createElement('div')

    ingresso.appendChild(textoIngresso)

    container.appendChild(ingresso)

    console.log(`ingresso ${ingressos}`)

    ingressos++  

    ingresso.setAttribute('id' , 'eles')

    ingresso.innerHTML += `<p style="padding-bottom:15px;">${filme1}</p>`

    ingresso.innerHTML += '<p style="padding-bottom:15px;">entrada-meia</p>'

    ingresso.innerHTML += `<p>.valido.</p>`

    } 
    
     total.innerHTML += `<p> O total de ${qtd} meia foi = R$${conta2} reais</p>`
    } else {

    }

    var preço = Number(12)


    if (ingressos > 6 || qtd == 0) {
        location.reload()
    }

}  else  if(titulo[1].checked) {

    filme1 = 'Jurassic world'

if (confirm == true){    
var disable = document.getElementById('bloquearm') 

disable.setAttribute("disabled" , "disabled")
while (ingressos <= qtd) {

var textoIngresso = document.createElement('div')

textoIngresso.innerHTML = ingressos

var  ingresso = document.createElement('div')

ingresso.appendChild(textoIngresso)

container.appendChild(ingresso)

console.log(`ingresso ${ingressos}`)

ingressos++  

ingresso.setAttribute('id' , 'eles')


ingresso.innerHTML += `<p style="padding-bottom:15px;"> ${filme1}</p>`

ingresso.innerHTML += '<p style="padding-bottom:15px;"> entrada-meia</p>'

ingresso.innerHTML += `<p>.valido.</p>`

} 
total.innerHTML += `<p> O total de ${qtd} meia foi = R$${conta2} reais</p>`

}

var preço = Number(12)

if (ingressos > 6 || qtd == 0) {
    location.reload()
}

}  else if(titulo[2].checked) {

    filme1 = 'sonic2'

if (confirm == true){    
var disable = document.getElementById('bloquearm') 

disable.setAttribute("disabled" , "disabled")
while (ingressos <= qtd) {

var textoIngresso = document.createElement('div')

textoIngresso.innerHTML = ingressos

var  ingresso = document.createElement('div')

ingresso.appendChild(textoIngresso)

container.appendChild(ingresso)

console.log(`ingresso ${ingressos}`)

ingressos++  

ingresso.setAttribute('id' , 'eles')

ingresso.innerHTML += `<p style="padding-bottom:15px;">${filme1}</p>`

ingresso.innerHTML += '<p style="padding-bottom:15px;">entrada-meia</p>'

ingresso.innerHTML += `<p>.valido.</p>`

            } 
            total.innerHTML += `<p> O total de ${qtd} meia foi = R$${conta2} reais</p>`
        }
        if (ingressos > 6 || qtd == 0) {
            location.reload()
        }
    }
    
}

function recibo() {

}



window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    // Target elements
    const navBar = document.getElementById("navBar");
    const links = document.querySelectorAll("#navBar a");

  if (document.documentElement.scrollTop > 50) {
    navBar.classList.remove("pa-fixedd-header");
    navBar.classList.add("pa-fixed-header");

    // Change the color of links on scroll
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.add('text-black');
    }

  } else {
    navBar.classList.remove("pa-fixed-header");
    navBar.classList.add("pa-fixedd-header");
    
    // Change the color of links back to default
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.remove('text-black');
    }
  }
}



