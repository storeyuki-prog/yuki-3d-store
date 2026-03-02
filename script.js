let cart = JSON.parse(localStorage.getItem("cart")) || [];
let allProducts = [];

document.getElementById("cart-count").innerText = cart.length;

async function loadProducts() {

    let { data, error } = await supabaseClient
        .from("products")
        .select("*");

    if (error) {
        console.log(error);
        return;
    }

    allProducts = data;
    displayProducts(data);
}

function displayProducts(products) {
    let container = document.getElementById("product-list");
    container.innerHTML = "";

    products.forEach((product, index) => {
        container.innerHTML += `
        <div class="card">
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>${product.price} DA</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        </div>
        `;
    });
}

function addToCart(index) {
    cart.push(allProducts[index]);
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("cart-count").innerText = cart.length;
}

function filterCategory() {
    let selected = document.getElementById("categoryFilter").value;

    if (selected === "all") {
        displayProducts(allProducts);
    } else {
        let filtered = allProducts.filter(p => p.category === selected);
        displayProducts(filtered);
    }
}

function sendOrder() {
    if(cart.length === 0){
        alert("Cart is empty!");
        return;
    }

    let message = "Hello YUKI,%0D%0A%0D%0AI want to order:%0D%0A";

    cart.forEach(item => {
        message += "- " + item.name + " (" + item.price + " DA)%0D%0A";
    });

    window.location.href = `mailto:storeyuki2@gmail.com?subject=YUKI Order&body=${message}`;
}

loadProducts();
