import UI from "./js/ui.js";
import Request from "./js/request.js";

const oneBtn = document.querySelector(".buttons__one-btn");
const allBtn = document.querySelector(".buttons__all-btn");
const inputValue = document.querySelector(".chr-input");

oneBtn.addEventListener("click", (event) => {
  try {
    event.preventDefault();
    const id = inputValue.value.trim();
    if (id === "") {
      alert("Please, enter id");
      inputValue.value = "";
      return;
    } else if (id > 100 || id <= 0) {
      alert(`There is no product with id - ${id}`);
      inputValue.value = "";
      return;
    }
    UI.clearList();
    Request.getOne(id).then((data) => UI.printProducts(data));
    inputValue.value = "";
  } catch (error) {
    console.error(error);
  }
});

allBtn.addEventListener("click", (event) => {
  try {
    event.preventDefault();
    UI.clearList();
    Request.getAll().then((data) =>
      data.products.forEach((element) => UI.printProducts(element))
    );
  } catch (error) {
    console.error(error);
  }
});
