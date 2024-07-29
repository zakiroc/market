fetch('https://fakestoreapi.com/products?limit=10')
.then(response => response.json())
.then(data => renderProducts(data))
.catch(error => console.error('Ошибка:', error));


function renderProducts(products) {
const container = document.getElementById('product-container');
container.innerHTML = '';

products.forEach(product => {

  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

 
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <div class="product-info">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p class="price">$${product.price.toFixed(2)}</p>
      <p class="rating">${product.rating.rate} (${product.rating.count} reviews)</p>
    </div>
  `;

  
  container.appendChild(productCard);
});
}