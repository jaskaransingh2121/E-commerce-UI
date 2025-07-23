let cartcount = document.querySelector(".cart-count")
let addtocartbtn = document.querySelectorAll(".add-to-cart")

let cart = JSON.parse(localStorage.getItem("cart"))  || [];
updatecartcount()

function updatecartcount(){
    cartcount.textContent = cart.reduce((sum, item)=> sum + item.qty , 0)
}

addtocartbtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        let product = {
            id: btn.dataset.id,
            name: btn.parentElement.querySelector('h3').innerText,
            price: btn.parentElement.querySelector('p').innerText,
            img: btn.parentElement.querySelector('img').src,
            qty: 1
        }
        let existing = cart.find(item => item.id === product.id && item.price === product.price);
        if(existing){
            existing.qty++
        }else{
            cart.push(product)
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        updatecartcount()
    })
})

