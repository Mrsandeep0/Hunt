function searchProducts() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');
  
    products.forEach(product => {
      const productName = product.querySelector('h3').innerText.toLowerCase();
      if (productName.includes(searchInput)) {
        product.style.display = 'block'; // Show matching product
      } else {
        product.style.display = 'none'; // Hide non-matching product
      }
    });
  }
  