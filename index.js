
let image=document.getElementById('image')
let newsImage=document.getElementById('newsImage')
let images=['./images/homeImage1.jpg','./images/homeImage2.jpg','./images/homeImage3.jpg', './images/homeImage4.jpg', './images/homeImage5.jpg' ]
setInterval(()=>{
let rendom=Math.floor(Math.random()*5)
image.src=images[rendom]

}, 5000)



let manuBtn=document.getElementById('manu-btn')
// let cartBtn=document.querySelector('#cart-btn')
// let searchBtn=document.querySelector('#search-btn')
// const cartItemContainer=document.getElementsByClassName('cart-item-container')
manuBtn.onclick=()=>{  
 document.querySelector('.navbar').classList.toggle('active');
document.querySelector('.cart-item-container').classList.remove('active')
document.querySelector(".search-form").classList.remove('active')
}
// cartBtn.onclick=()=>{
//     document.querySelector('.cart-item-container').classList.toggle('active')
//     document.querySelector('.navbar').classList.remove('active');
//     document.querySelector(".search-form").classList.remove('active')
// }
// searchBtn.onclick=()=>{
//     document.querySelector(".search-form").classList.toggle('active')
//     document.querySelector('.navbar').classList.remove('active');
//     document.querySelector('.cart-item-container').classList.remove('active')
// }

window.onscroll=()=>{
document.querySelector('.navbar').classList.remove('active');
// document.querySelector('.cart-item-container').classList.remove('active')
// document.querySelector(".search-form").classList.remove('active')
    
}

// index.jsdocument.addEventListener('click', addingItemsToCart)

// function addingItemsToCart(e){
//     let gettingParentElement=e.target.parentElement
//     let price=gettingParentElement.getElementsByClassName("price")[0].innerText
//     let image=gettingParentElement.getElementsByTagName("img")[0].src
//     let title=gettingParentElement.getElementsByTagName("h3")[0].innerText
//     cartHtml(price, image,title )
// }

// function cartHtml(price, image,title){
//     let cartBox=document.createElement('div')
//         cartBox.classList.add('cart-item')
    
//     cartBox.innerHTML=` 
//     <div class="cart-item">
//     <span class="fas fa-times"></span>
//     <img src="${image}" alt=""/>
//     <div class="content">
//         <h3>${title}</h3>
//         <div class="price">${price}/-</div>
//     </div>
// </div>`


    
// }

// cartHtml()

let boxContainer=document.getElementById('box-container')

function suny(){
    
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=35fb180afdc34f9e84e0cc76f857dd46')
  .then((response) => response.json())
  .then((data) => data.articles.forEach(i=>{
    boxContainer.innerHTML+=`<div class="box">
 
    <h2>${i.title}</h2>
    <img src="${i.urlToImage}" alt="" class="quote">
    <h3>${i.publishedAt}</h3>
     <p>${i.content}</p>
     
     

 </div>`
  }));
}

suny()

// author
// : 
// null
// content
// : 
// "News Waali latest news updates.Munich: The European Southern Observatory (ESO) has released stunning new images of a nebula hidden in a serpentine star cluster far from Earth. The nebula Sh2-54 and s… [+468 chars]"
// description
// : 
// ""
// publishedAt
// : 
// "2023-01-09T01:50:05Z"
// source
// : 
// {id: null, name: 'Newswaali.com'}
// title
// : 
// "A star factory was discovered hidden in a serpentine cluster 6000 light years awayNews WAALI - News Waali"
// url
// : 
// "https://newswaali.com/a-star-factory-was-discovered-hidden-in-a-serpentine-cluster-6000-light-years-away-news-waali/"
// urlToImage
// : 
// "https://dailyuniversal.com.pk/wp-content/uploads/light-years..jpg"