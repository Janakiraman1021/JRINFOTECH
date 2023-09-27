let cart = [];
let total = 0;

document.querySelectorAll('button[data-course]').forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const courseName = event.target.getAttribute('data-course');
    const price = parseFloat(event.target.getAttribute('data-price'));

    cart.push({ name: courseName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart');
    const totalSpan = document.getElementById('total');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });
    totalSpan.textContent = total.toFixed(2);
}

document.getElementById('checkout').addEventListener('click', checkout);

function checkout() {
    // In a real system, you would implement payment processing here.
    alert(`Total Amount: $${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCart();
}
