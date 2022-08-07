const ulEl = [...document.querySelector('#categories').children];
console.log('Number of categories: ', ulEl.length);

ulEl.forEach(elem => {
  console.log('Category: ', elem.children[0].textContent);
  console.log('Elements: ', elem.children[1].children.length);
});
