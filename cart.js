let carttable = document.querySelector(".cart-table tbody")
let carttotal = document.querySelector(".cart-total h3")
let cart = JSON.parse(localStorage.getItem('cart')) || []

function rendercart() {
    carttable.innerHTML = '';
    let total = 0;

        if (cart.length === 0) {
        carttable.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center; padding:20px; font-size:1.2rem; color:#555;">
                    Your cart is empty. <a href="products.html" style="color:#ff6f61; font-weight:bold;">Shop Now</a>
                </td>
            </tr>
        `;
        carttotal.textContent = `Total: ₹0`;
        return;
    }
    
    cart.forEach((item, index) => {
        let price = parseInt(item.price.replace('₹', ''))
        let itemtotal = price * item.qty;
        total += itemtotal;

        carttable.innerHTML += `
<tr>
    <td class="cart-product">
        <img src="${item.img}" alt="${item.name}">
        <span>${item.name}</span>
    </td>
    <td>${item.price}</td>
    <td><input type="number" min="1" value="${item.qty}" data-index="${index}"></td>
    <td>₹${itemtotal}</td>
    <td><button class="remove-btn" data-index="${index}">Remove</button></td>
</tr>
`

    })
    carttotal.textContent = `Total:₹${total}`
    attachEvents()
}

function attachEvents() {
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('change', (e) => {
            let index = e.target.dataset.index
            cart[index].qty = parseInt(e.target.value)
            localStorage.setItem('cart', JSON.stringify(cart))
            rendercart()
        })
    })
    document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener('click', (e) => {
            let index = e.target.dataset.index
            cart.splice(index, 1)
            localStorage.setItem('cart', JSON.stringify(cart))
            rendercart()
        })
    })

}

rendercart()