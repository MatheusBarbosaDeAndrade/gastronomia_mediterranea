const elementoReceita = [...document.querySelectorAll('.elementoReceita')]
const entSal = document.querySelector('#entSala')
const massas = document.querySelector('#massas')
const risoto = document.querySelector('#risoto')
const pratosComCarne = document.querySelector('#pratosComCarne')
const sobremesas = document.querySelector('#sobremesas')



const arrReceitas = [
  //entradas e saladas
  {
    nome: 'Brusqueta',
    link: 'https://www.receiteria.com.br/wp-content/uploads/brusqueta.jpeg' 
  },
  {
    nome: 'Carpaccio de carne',
    link: 'https://www.receiteria.com.br/wp-content/uploads/carpaccio-de-carne-730x480.jpeg'
  },
  
  {
    nome: 'Arancini',
    link: 'https://www.receiteria.com.br/wp-content/uploads/arancini-730x480.jpeg'
  },
  //Massas
  {
    nome: 'Calzone',
    link: 'https://www.receiteria.com.br/wp-content/uploads/calzone.jpeg'
  },
  
  {
    nome: 'Spaghetti al limone',
    link: 'https://www.receiteria.com.br/wp-content/uploads/spaghetti-al-limone.jpeg'
  },
  {
    nome: 'Fettuccine alfredo',
    link: 'https://www.receiteria.com.br/wp-content/uploads/fettuccine-alfredo-rotated.jpeg'
  },
  {
    nome: 'Nhoque recheado de queijo',
    link: 'https://www.receiteria.com.br/wp-content/uploads/nhoque-recheado-de-queijo-capa.png'
  },
  {
    nome: 'Lasanha bolonhesa ao molho branco',
    link: 'https://www.receiteria.com.br/wp-content/uploads/lasanha-bolonhesa-ao-molho-branco.jpeg'
  },
  //risoto
  {
    nome: 'Risoto de camarão',
    link: './images/IMAGENS DE COMIDAS/risoto-de-camarao-14-730x480.webp'
  },
  {
    nome: 'Risoto integral de abobrinha',
    link: 'images/IMAGENS DE COMIDAS/risoto-integral-de-abobrinha-9.webp'
  },
  //pratos com carne
  {
    nome: 'Minestrone',
    link: 'images/IMAGENS DE COMIDAS/minestrone-capa.webp'
  },
  {
    nome: 'Molho à bolonhesa',
    link: 'images/IMAGENS DE COMIDAS/molho-a-bolonhesa-730x480.jpeg'
  },
  //sobremesa
  {
    nome: 'Tiramisu',
    link: 'images/IMAGENS DE COMIDAS/tiramisu-capa.webp'
  },
  {
    nome: 'Panna cotta',
    link: 'images/IMAGENS DE COMIDAS/panna-cotta-capa.webp'
  },
  {
    nome: 'Tiramisu fácil',
    link: 'https://www.receiteria.com.br/wp-content/uploads/tiramisu-facil-01.jpg'
  },
  {
    nome: 'Caçarola italiana',
    link: 'https://www.receiteria.com.br/wp-content/uploads/cacarola-italiana-1-730x730.jpg'
  },
  {
    nome:'Cannolis de chocolate',
    link:'https://www.receiteria.com.br/wp-content/uploads/cannolis-de-chocolate-730x913.jpg'
  },
  
]

const entSalFilter = arrReceitas.slice(0, 3)
const massasFilter = arrReceitas.slice(3, 8)
const risotoFilter = arrReceitas.slice(8, 10)
const pratosComCarneFilter = arrReceitas.slice(10, 12)
const sobremesasFilter = arrReceitas.slice(12, 17)


function adcionarReceita(elemento, filtro){
  if(elemento){
    elemento.innerHTML=''
    
    elementoReceita.forEach((element)=>{
        filtro.forEach((el)=>{
          let criarReceita = document.createElement('div')
          let link = document.createElement('a')
          link.setAttribute('href', `${el.nome}.html`)
          link.setAttribute('style', 'color: black')
          let imagemReceita = document.createElement('img')
          let nomeReceita = document.createElement('h2')
          imagemReceita.setAttribute('src', el.link)
          criarReceita.setAttribute('class', 'receita')
          nomeReceita.textContent = el.nome
          criarReceita.appendChild(imagemReceita)
          criarReceita.appendChild(nomeReceita)
          link.appendChild(criarReceita)
          element.appendChild(link)
        })
    })
  }
}

adcionarReceita(entSal, entSalFilter)
adcionarReceita(massas, massasFilter)
adcionarReceita(risoto, risotoFilter)
adcionarReceita(pratosComCarne, pratosComCarneFilter)
adcionarReceita(sobremesas, sobremesasFilter)
