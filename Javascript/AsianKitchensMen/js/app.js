const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
const motherDiv = document.querySelector(".section-center")
// Tag getirme
tagIndex = () => {
  let menuT=[]
  const keys = Object.keys(menu);
  keys.forEach(key => {
    menuT[key]=menu[key].category
  })
  menuT=(menuT.filter((e, i, a) => a.indexOf(e) === i))
  return menuT
}
tagButton = (a) => {
  const buttonContainer = document.querySelector(".btn-container")
  let buttonTagElement = document.createElement("button")
  buttonTagElement.onclick=function(){  tagFunc(a)};
  buttonTagElement.classList.add("btnSS", "btn", "btn-light")
  buttonTagElement.innerText = a; 
  buttonContainer.appendChild(buttonTagElement)
}
createTagButton = () => {
  let tagElement = tagIndex()
  tagButton("All")
  tagElement.forEach(name => tagButton(name))
}
tagFunc = (ad) => {
  
  let divDis = document.getElementsByClassName("mb-3")
  for (i=0 ; i<=divDis.length -1 ; i++ ){
    if(ad.toUpperCase()=="ALL"){
      divDis[i].style.display=""
    }else{
      if(divDis[i].id == ad){
        divDis[i].style.display=""
      }else{
      divDis[i].style.display="none"
      }
    }
  }
} 
containerMenu = (name, price, contents, tag, image) => {
  const mDiv1 = document.createElement("div")
    mDiv1.classList.add("mb-3")
    mDiv1.style.maxWidth ="50%"
    mDiv1.style.display ="50%"
    mDiv1.id=tag
  const mDiv2 = document.createElement("div")
    mDiv2.classList.add("row","g-0")
  const imgDiv = document.createElement("div")
    imgDiv.classList.add("col-md-4")
  const img = document.createElement("img")
    img.classList.add("img-fluid","rounded-start")
    img.src =image //
  const mConDiv = document.createElement("div")
    mConDiv.classList.add("col-md-8")
  const mConDiv2 = document.createElement("div")
    mConDiv2.classList.add("card-body")
  const conDiv = document.createElement("div")
    conDiv.classList.add("row")
  const nameDiv = document.createElement("div")
    nameDiv.classList.add("col", "d-flex", "justify-content-start")
  const nameH5 = document.createElement("h5")
    nameH5.classList.add("card-title")
    nameH5.innerHTML= name //
  const priceDiv = document.createElement("div")
    priceDiv.classList.add("col", "d-flex", "justify-content-end")
  const priceH5 = document.createElement("h5")
    priceH5.classList.add("card-title")
    priceH5.innerHTML=price //
  const hr = document.createElement("hr")
  const consP = document.createElement("p")
    consP.classList.add("card-text")
    consP.innerHTML=contents // 
  const tagP = document.createElement("p")
    tagP.classList.add("card-text")
  const smallTag = document.createElement("small")
    smallTag.classList.add("text-muted")
    smallTag.innerHTML=tag //
tagP.appendChild(smallTag)
priceDiv.appendChild(priceH5)
nameDiv.appendChild(nameH5)
conDiv.appendChild(nameDiv)
conDiv.appendChild(priceDiv)
mConDiv2.appendChild(conDiv)
mConDiv2.appendChild(hr)
mConDiv2.appendChild(consP)
mConDiv2.appendChild(tagP)
mConDiv.appendChild(mConDiv2)
imgDiv.appendChild(img)
mDiv2.appendChild(imgDiv)
mDiv2.appendChild(mConDiv)
mDiv1.appendChild(mDiv2)
motherDiv.appendChild(mDiv1)
}
createTagButton()
  Object.values(menu).forEach((mm ,id) => {
    nameC=menu[id].title
    price=menu[id].price
    contents=menu[id].desc
    tag=menu[id].category
    image=menu[id].img
    containerMenu(nameC, price, contents, tag, image)

  })
