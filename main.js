import UI from './js/ui.js';
import Request from './js/request.js';


const oneBtn = document.querySelector(".buttons__one-btn");
const allBtn = document.querySelector(".buttons__all-btn");
const inputValue = document.querySelector(".chr-input");

oneBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const id = inputValue.value.trim();
      if(id === '') {
        alert('Please, enter id');
        return;
      } else if(id > 100) {
        alert(`There is no product with id - ${id}`);
        return;
      }

      let product = Request.getOne(id);
      UI.printProducts(product);
      inputValue.value = '';
});

allBtn.addEventListener('click', (event) => {
      event.preventDefault();
      let products = Request.getAll();
      products.map(product => UI.printProducts(product));
});
