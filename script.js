let cart = [];

let products = [
    {name: "3D Phone Stand", price: 1200,img:"images/stand.jpg"},
    {name: "Controller Holder", price: 2500,img:"images/Controller_Holder.jpg"},
    {name: "Dragon Figure", price: 1800,img:"images/Dragon_Figure.jpg"},
    {name: "Custom Name Print", price: 1500,img:"images/Custom_Name_Print.jpg"},
    {name: "Gaming Headset Stand", price: 2200,img:"images/Gaming_Headset_Stand.jpg"},
    {name: "Wall Decor Geometry", price: 3000,img:"images/Wall_Decor_Geometry.jpg"}
];

function displayProducts() {
    let container = document.getElementById("product-list");
    container.innerHTML = "";

    products.forEach((product, index) => {
        container.innerHTML += `
            <div class="card">
                <h3>${product.name}</h3>
                <p>${product.price} DA</p>
                <button onclick="addToCart(${index})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(index) {
    cart.push(products[index]);
    document.getElementById("cart-count").innerText = cart.length;
    localStorage.setItem('cart', JSON.stringify(cart));
}
displayProducts();
container.innerHTML += `
<div class="card">
    <img src="${product.img}" style="width:100%; border-radius:15px;"><br>
    <h3>${product.name}</h3>
    <p>${product.price} DA</p>
    <button onclick="addToCart(${index})">Add to Cart</button>
</div>
`;
