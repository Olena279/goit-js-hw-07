const categoriesList = document.getElementById(`categories`);
const categories = categoriesList.querySelectorAll(`.item`);

console.log(`Number of categories:`, categories.length);

categories.forEach(category => {
  const categoryTitle = category.querySelector(`h2`).textContent;
  const itemsInCategory = category.querySelectorAll(`li`).length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements:`, itemsInCategory);
});
