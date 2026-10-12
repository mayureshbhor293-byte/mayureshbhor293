
let products = [
    { id: 1, name: "Laptop", price: 1000, category: "Electronics", stock: 5 },
    { id: 2, name: "Headphones", price: 200, category: "Electronics", stock: 15 },
    { id: 3, name: "T-shirt", price: 20, category: "Apparel", stock: 50 }
];

let editMode = false;
let editProductId = null;

// HTML elements
const productListElmt = document.querySelector("#productList");
const NameElmt = document.querySelector("#Name");
const CategoryElmt = document.querySelector("#Category");
const PriceElmt = document.querySelector("#Price");
const StockElmt = document.querySelector("#Stock");
const addNewBtnElmt = document.querySelector("#addNewBtn");

const cartListElmt = document.querySelector("#cartList");
const cartAmountElmt = document.querySelector("#cartAmount");
const cartLengthElmt = document.querySelector("#cartLength");

// Local storage functions
function getFromLocal() {
    return JSON.parse(localStorage.getItem("B98")) || [];
}

function saveToLocal(products) {
    localStorage.setItem("B98", JSON.stringify(products));
}

function getCartFromLocal() {
    return JSON.parse(localStorage.getItem("b98Cart")) || [];
}

function saveCartToLocal(cart) {
    localStorage.setItem("b98Cart", JSON.stringify(cart));
}

// Display cart item count
function updateCartCount() {
    const cart = getCartFromLocal();

    if (cartLengthElmt) {
        cartLengthElmt.textContent = cart.reduce(
            (total, item) => total + item.quantity, 0
        );
    }
}

// Display products
function renderProducts(productArray) {
    if (!productListElmt) return;

    productListElmt.innerHTML = productArray.map(product => `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card h-100 text-bg-info">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <h6>${product.category}</h6>

                    <p>Price: ₹${product.price}</p>
                    <p>Stock: ${product.stock}</p>

                    <button class="btn btn-warning mb-2"
                        onclick="editProd(${product.id})">
                        Edit
                    </button>

                    <button class="btn btn-danger mb-2"
                        onclick="deleteProd(${product.id})">
                        Delete
                    </button>

                    <button class="btn btn-primary"
                        onclick="addToCart(${product.id})"
                        ${product.stock <= 0 ? "disabled" : ""}>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    `).join("");
}

// Add or update product
function AddNewProduct() {
    const name = NameElmt.value.trim();
    const category = CategoryElmt.value.trim();
    const price = Number(PriceElmt.value);
    const stock = Number(StockElmt.value);

    if (
        !name ||
        !category ||
        PriceElmt.value === "" ||
        StockElmt.value === "" ||
        !Number.isFinite(price) ||
        price <= 0 ||
        !Number.isInteger(stock) ||
        stock < 0
    ) {
        alert("Please enter valid product details.");
        return;
    }

    let productArray = getFromLocal();

    if (editMode) {
        const product = productArray.find(
            p => p.id === editProductId
        );

        if (product) {
            product.name = name;
            product.category = category;
            product.price = price;
            product.stock = stock;
        }

        editMode = false;
        editProductId = null;
        addNewBtnElmt.textContent = "Add New Product";
    } else {
        const newProduct = {
            id: Date.now(),
            name: name,
            category: category,
            price: price,
            stock: stock
        };

        productArray.push(newProduct);
    }

    saveToLocal(productArray);
    renderProducts(productArray);
    clearForm();
}

function clearForm() {
    NameElmt.value = "";
    CategoryElmt.value = "";
    PriceElmt.value = "";
    StockElmt.value = "";
}

// Delete product
function deleteProd(id) {
    if (!confirm("Do you want to delete this product?")) return;

    let productArray = getFromLocal();

    productArray = productArray.filter(p => p.id !== id);

    saveToLocal(productArray);
    renderProducts(productArray);
}

// Edit product
function editProd(id) {
    const product = getFromLocal().find(p => p.id === id);

    if (!product) return;

    NameElmt.value = product.name;
    CategoryElmt.value = product.category;
    PriceElmt.value = product.price;
    StockElmt.value = product.stock;

    editMode = true;
    editProductId = id;

    addNewBtnElmt.textContent = "Update Product";

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Add product to cart
function addToCart(id) {
    const productArray = getFromLocal();
    const product = productArray.find(p => p.id === id);

    if (!product || product.stock <= 0) {
        alert("Product is out of stock.");
        return;
    }

    let cart = getCartFromLocal();

    const cartItem = cart.find(p => p.prodID === id);

    if (cartItem) {
        if (cartItem.quantity >= product.stock) {
            alert("Maximum available stock reached.");
            return;
        }

        cartItem.quantity++;
    } else {
        cart.push({
            prodID: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    saveCartToLocal(cart);
    renderCart(cart);
    updateCartCount();

    alert("Product added to cart!");
}

// Display cart
function renderCart(cart) {
    if (!cartListElmt) return;

    if (cart.length === 0) {
        cartListElmt.innerHTML = `
            <tr>
                <td colspan="6" class="text-center">
                    Your cart is empty.
                </td>
            </tr>
        `;

        if (cartAmountElmt) {
            cartAmountElmt.innerHTML = `
                <h5>Total: ₹0</h5>
            `;
        }

        updateCartCount();
        return;
    }

    cartListElmt.innerHTML = cart.map((item, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>₹${item.price}</td>

            <td>
                <button class="btn btn-sm btn-success"
                    onclick="decreaseQuantity(${item.prodID})">
                    -
                </button>

                <span class="mx-2">${item.quantity}</span>

                <button class="btn btn-sm btn-success"
                    onclick="increaseQuantity(${item.prodID})">
                    +
                </button>
            </td>

            <td>₹${item.price * item.quantity}</td>

            <td>
                <button class="btn btn-danger btn-sm"
                    onclick="removeFromCart(${item.prodID})">
                    Remove
                </button>
            </td>
        </tr>
    `).join("");

    const productAmount = cart.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    const deliveryCharges = 500;
    const handlingCharges = 100;
    const totalAmount = productAmount + deliveryCharges + handlingCharges;

    if (cartAmountElmt) {
        cartAmountElmt.innerHTML = `
            <p>Product Amount: ₹${productAmount}</p>
            <p>Delivery Charges: ₹${deliveryCharges}</p>
            <p>Handling Charges: ₹${handlingCharges}</p>
            <hr>
            <h5>Total Amount: ₹${totalAmount}</h5>
        `;
    }

    updateCartCount();
}

// Remove item from cart
function removeFromCart(id) {
    let cart = getCartFromLocal();

    cart = cart.filter(item => item.prodID !== id);

    saveCartToLocal(cart);
    renderCart(cart);
    updateCartCount();
}

// Increase quantity
function increaseQuantity(id) {
    let cart = getCartFromLocal();
    const item = cart.find(p => p.prodID === id);
    const product = getFromLocal().find(p => p.id === id);

    if (!item || !product) return;

    if (item.quantity >= product.stock) {
        alert("Maximum available stock reached.");
        return;
    }

    item.quantity++;

    saveCartToLocal(cart);
    renderCart(cart);
    updateCartCount();
}

// Decrease quantity
function decreaseQuantity(id) {
    let cart = getCartFromLocal();
    const index = cart.findIndex(p => p.prodID === id);

    if (index === -1) return;

    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }

    saveCartToLocal(cart);
    renderCart(cart);
    updateCartCount();
}

// Initialize application
window.addEventListener("DOMContentLoaded", function () {
    // Add default products only on the first visit
    if (localStorage.getItem("B98") === null) {
        saveToLocal(products);
    }

    renderProducts(getFromLocal());
    renderCart(getCartFromLocal());
    updateCartCount();

    if (addNewBtnElmt) {
        addNewBtnElmt.addEventListener("click", AddNewProduct);
    }
});
