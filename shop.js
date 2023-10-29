const products = [
    {
        name1: 'Chairs',
        image: 'image/char.jpg',
        name: 'Black and brown chairs',
        priceCents: 1090
    },
    {
        name1: 'Basketball',
        image: 'image/ketbas.jpg',
        name: 'Pantera Basketball',
        priceCents: 2090
    },
    {
        name1: 'Girls desire',
        image: 'image/tshirt.webp',
        name:'T-Shirts for girls',
        priceCents: 3090
    },
    {
        name1: 'Shorts for yonug men',
        image: 'image/shorts.jpg',
        name:'Summer shorts',
        priceCents: 4090
    },
];

    let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="card" style="width: 20rem; background-image: url(image/shopback.jpg);">
        <img class="zoom" src="${product.image}" style="height:204px; width:318px;" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.name1}</h5>
          <p class="card-text">${product.name}</p>
          <p class="card-text" ><h5 style="color: chartreuse;">$${product.priceCents / 100}</h5></p>
          <a href="#" class="btn btn-warning" onclick="">Add to cart</a>
        </div>
      </div>
    `
});
console.log(productsHTML);


document.querySelector('.js-products-grid').innerHTML = productsHTML;