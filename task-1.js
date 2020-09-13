const selectedById = document.querySelector("#categories");
const numberOfCategories = selectedById.children.length;
console.log(`В списке ${numberOfCategories} категории`);

const itemsRef = document.querySelectorAll(".item");

itemsRef.forEach((itemRef) => {
  const titleRef = itemRef.firstElementChild.textContent;
  const numberOfElements = itemRef.lastElementChild.children.length;
  console.log(
    `Категория : ${titleRef} \nКоличество элементов : ${numberOfElements}`
  );
});
