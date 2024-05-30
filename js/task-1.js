const elements = document.querySelectorAll('.item');
console.log(`Number of categories: ${elements.length}`);

    elements.forEach(element => {
    const text = element.querySelector('h2');
    const items = element.querySelectorAll('ul li').length;


   console.log(`Category: ${text.textContent}`);
   console.log(`Elements: ${items}`);
});