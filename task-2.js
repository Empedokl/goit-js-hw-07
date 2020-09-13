const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listItemRef = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const itemsRef = document.createElement("li");
  itemsRef.textContent = ingredient;
  listItemRef.append(itemsRef);
});



