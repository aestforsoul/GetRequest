export default class UI {
  static printProducts(data) {
    const content = document.querySelector(".info");

    const product = document.createElement("div");
    product.classList.add("info__product");

    const productTitle = document.createElement("div");
    productTitle.classList.add("product__title");
    productTitle.textContent = `${data.title}`;
    product.appendChild(productTitle);

    const productCategory = document.createElement("p");
    productCategory.classList.add("product__info");
    productCategory.textContent = `Category: ${data.category}`;
    product.appendChild(productCategory);

    const productBrand = document.createElement("p");
    productBrand.classList.add("product__info");
    productBrand.textContent = `Brand: ${data.brand}`;
    product.appendChild(productBrand);

    const productDesc = document.createElement("p");
    productDesc.classList.add("product__info");
    productDesc.textContent = `Description: ${data.description}`;
    product.appendChild(productDesc);

    content.appendChild(product);
  }

  static clearList() {
    const content = document.querySelector(".info");
    content.innerHTML = "";
  }
}
