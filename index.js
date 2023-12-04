const body = document.querySelector("body")

let listFigure =[]
let listFrame=[]
function separateItens(itens){
  for(let i=0; i<itens.length; i++){
    if(itens[i].type == 'Painting'){
      listFrame.push(itens[i])
    } 
    if(itens[i].type == 'Action Figures'){
      listFigure.push(itens[i])
    }
  }
}
separateItens(itens)


function creatProductCard(itens){
  let productCard= document.createElement("li")
  productCard.id = "itens-product"
  productCard.className= "product-card"

  productImage = document.createElement("img")
  productImage.src= itens.image
  productImage.className = "image-product" 
  productCard.appendChild(productImage)

  let productName =document.createElement("p")
  productName.className = "name-product"
  productName.innerText = itens.name
  productCard.appendChild(productName)

  let productPrice = document.createElement("p")
  productPrice.className ="price-product"
  productPrice.innerText = itens.price
  productCard.appendChild(productPrice)

  return productCard
}

function creatsectionFrame(listFrame){
  let sectionFrame = document.createElement("section")
  sectionFrame.className = "product-section"

  let sectionTitle = document.createElement("h2")
  sectionTitle.innerText = "Paintings"
  sectionTitle.className = "titles-section"
  sectionFrame.appendChild(sectionTitle)

  let ulProducts = document.createElement("ul")
  ulProducts.className= "ul-products"
  sectionFrame.appendChild(ulProducts)

  for(let i=0; i<listFrame.length; i++){
    let productFrame= listFrame[i]
    let card =creatProductCard(productFrame)
    ulProducts.appendChild(card)
  }
  body.appendChild(sectionFrame)
}
creatsectionFrame(listFrame)

function creatsectionFigure(listFigure){
  let sectionFigure = document.createElement("section")
  sectionFigure.className = "product-section"

  let sectionTitle = document.createElement("h2")
  sectionTitle.innerText = "Action Figures"
  sectionTitle.className = "titles-section"
  sectionFigure.appendChild(sectionTitle)

  let ulProducts = document.createElement("ul")
  ulProducts.className= "ul-products"
  sectionFigure.appendChild(ulProducts)

  for(let i=0; i<listFigure.length; i++){
    let productFigure= listFigure[i]
    let card =creatProductCard(productFigure)
    ulProducts.appendChild(card)
  }
  body.appendChild(sectionFigure)
}
creatsectionFigure(listFigure)


