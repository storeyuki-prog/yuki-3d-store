let cart = JSON.parse(localStorage.getItem('cart')) || [];
let products = JSON.parse(localStorage.getItem('products')) || [
    {name: "3D Phone Stand", price: 1200, img:"images/stand.jpg", category:"Custom"},
    {name: "Controller Holder", price: 2500, img:"images/controller.jpg", category:"Gaming"},
    {name: "Dragon Figure", price: 1800, img:"images/dragon.jpg", category:"Figures"},
];

function displayProducts(filtered = products) {
    let container = document.getElementById("product-list");
    container.innerHTML = "";
    filtered.forEach((product, index) => {
        container.innerHTML += `
            <div class="card">
                <img src="${product.img}" style="width:100%; border-radius:15px;"><br>
                <h3>${product.name}</h3>
                <p>${product.price} DA</p>
                <button onclick="addToCart(${index})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(index) {
    cart.push(products[index]);
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById("cart-count").innerText = cart.length;
}

function filterCategory(cat) {
    displayProducts(products.filter(p => p.category === cat));
}

document.getElementById("cart-count").innerText = cart.length;
displayProducts();
