const categoriesList = document.querySelector('#categories');
const categoriesItems = document.querySelectorAll('.item');

console.log(Number of categories: ${categoriesItems.length});

categoriesItems.forEach((item) => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('li').length;

    console.log(Category: ${categoryName}, Elements:${categoryElements});
});