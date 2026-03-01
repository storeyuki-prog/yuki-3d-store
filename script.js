let cart = [];
let products = [
    {name: "3D Phone Stand", price: 1200},
    {name: "Controller Holder", price: 2500},
    {name: "Dragon Figure", price: 1800},
    {name: "Custom Name Print", price: 1500}
];

function displayProducts() {
    let container = document.getElementById("product-list");

    products.forEach((product, index) => {
        container.innerHTML += `
            <div class="card">
                <h3>${product.name}</h3>
                <p>Price: ${product.price} DA</p>
                <button onclick="addToCart(${index})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(index) {
    cart.push(products[index]);
    document.getElementById("cart-count").innerText = cart.length;
}

displayProducts();
