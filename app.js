const formInput = document.getElementById("form-input");
const submit = document.getElementById("btn");
const formSubmit = document.getElementById("form");
const formFilter = document.getElementById("form-filter");
const itemForm = document.querySelector(".item-form");
const clearButton = document.querySelector(".clear-btn");
const container = document.querySelectorAll(".container")[1];

const onSubmit = (event) => {
  !formInput.value ? alert("enter an item") : itemInput(formInput.value);

  localStorage.setItem("input", formInput.value);

  formInput.value = "";
  clearButton.style.display = "block";

  event.preventDefault();
};

formSubmit.addEventListener("submit", onSubmit);

// create function to output items

const itemInput = (item) => {
  const listItem = document.createElement("li");
  listItem.className = "collection-list";
  listItem.appendChild(document.createTextNode(item));
  const link = document.createElement("a");
  link.className = "delete-item";
  link.innerHTML = '<i style="float: right" class="fa fa-trash"></i>';
  listItem.appendChild(link);

  itemForm.appendChild(listItem);
};
const onDelete = (e) => {
  if (e.target.parentElement.classList.contains("delete-item")) {
    const div = document.createElement("div");
    div.className = "popBar";
    div.innerHTML = "<p>This will be deleted in 3 seconds</p>";
    container.appendChild(div);
    container.insertBefore(div, formSubmit);
    // set timer
    setTimeout(() => {
      e.target.parentElement.parentElement.remove();
      div.style.display = "none";
    }, 3000);
  }
};

// delete button
itemForm.addEventListener("click", onDelete);

// clear all
clearButton.addEventListener("click", () => {
  itemForm.innerHTML = "";
  clearButton.style.display = "none";
});

// filter shopping list
const filterList = (e) => {
  const text = e.target.value;
  const newList = document.querySelectorAll(".collection-list");
  newList.forEach((item) => {
    item.firstChild.textContent.charAt(0) === text.charAt(0)
      ? (item.style.display = "block")
      : (item.style.display = "none");
  });
};

formFilter.addEventListener("keyup", filterList);

// create a timer that shows that item will be deleted in 3 seconds
const timeOut = () => {
  const div = document.createElement("div");
  div.className = "popBar";
  div.innerHTML = "<p>This will be deleted in 3 seconds</p>";
  container.appendChild(div);
  container.insertBefore(div, formSubmit);

  console.log(document.querySelectorAll(".container")[1]);
};
