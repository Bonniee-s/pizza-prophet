const pizza = {
	pie: [
		{
			title: 'Maker Pizza',
			price: '$$'
		},
		{
			title: 'Pizza Libretto',
			price: '$$'
		},
		{
			title: 'Dominoes',
			price: '$'
		}
	],
	slice: [
		{
			title: 'Pizzaiolo',
			price: '$$'
		},
		{
			title: 'North of Brooklyn',
			price: '$$'
		},
		{
			title: 'Pizza Pizza',
			price: '$'
		},
		{
			title: 'King Slice',
			price: '$'
		}
	]
};

const randomElement = (array) => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

const pizzaProphetInit = () => {
		// listen for a form submit.
	//const $form = $('form');
	//$form.on('submit') in jquery
	const form = document.querySelector('form');
	form.addEventListener('submit', e => {
		e.preventDefault();
		//console.log("Form submitted!");
		//once form submits, grab values from selected radio inputs.
		const sizeSelected = document.querySelector('input[name=size]:checked').value;
		const priceSelected = document.querySelector('input[name=price]:checked').value;
		//console.log(sizeSelected, priceSelected);

		//use radio input values to look through pizza object
		const sizePizzaList = pizza[sizeSelected];
		//console.log(sizePizzaList);

		const withinPricePizzaList = sizePizzaList.filter((pizzaPlace) => {
			//console.log(pizzaPlace);
			if (pizzaPlace.price === priceSelected) {
				return true;
			} else { 
				return false;
			}

		});
		//console.log(withinPricePizzaList);
		
		const finalPizzaPlace = randomElement(withinPricePizzaList);
		//console.log("FINAL: ", finalPizzaPlace);

		//display the matching pizza joint to you 
		const pizzaHtml = `
			<h2>Go here ⏩ <span class="restaurant">${finalPizzaPlace.title}</span></h2>
		`;

		document.querySelector('.results').innerHTML = pizzaHtml;
	})

}
// Vanilla JS document ready
if (document.readyState === 'complete') {
	//IE U support 
	pizzaProphetInit();
} else {
	//other modern browsers
	document.addEventListener('DOMContentLoaded', pizzaProphetInit);
}