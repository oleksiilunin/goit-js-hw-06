const categories = document.querySelector('#categories');
const categoriesItems = categories.children;
console.log(`Number of categories: ${categoriesItems.length}`);

const catItem = document.querySelector('.item');
[...categoriesItems].forEach((item) => {
	console.log(`Category: ${item.firstElementChild.textContent}\nElements: ${item.lastElementChild.childElementCount}`)

});