
console.log("Script loaded");

const products = getAvailableProducts();
console.log(products); // Array of objects with properties (id, name, price, rating)


function renderProducts(products) {
    const unorderedList = document.querySelector("ul");

    products.forEach(product => {
        const list = document.createElement("li");
        list.innerHTML = `<span style='font-weight: 600; font-size: 25px;'>${product.name}</span> <br> price: ${product.price} <br> Rating: ${product.rating}`;
        unorderedList.appendChild(list);
    })
}

renderProducts(products); 