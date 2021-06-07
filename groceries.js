// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli  (0.99)",
		lactoseF: true,
		nutsF: true,
		org: true,
		price: 0.99
	},
	{
		name: "bread  (2.50)",
		lactoseF: true,
		nutsF: false,
		org: true,
		price: 2.50
	},
	{
		name: "salmon  (10.00)",
		lactoseF: true,
		nutsF: true,
		org: true,
		price: 10.00
	},
	{
		name: "chicken  (7.00)",
		lactoseF: true,
		nutsF: true,
		org: true,
		price: 7.00
	},
	{
		name: "bag of potatoes(15)  (4.99)",
		lactoseF: true,
		nutsF: true,
		org: true,
		price: 4.99
	},
	{
		name: "pasta  (2.99)",
		lactoseF: true,
		nutsF: true,
		org: false,
		price: 2.99
	},
	{
		name: "eggs  (3.99)",
		lactoseF: true,
		nutsF: true,
		org: true,
		price: 3.99
	},
	{
		name: "tomatoes  (1.99)",
		lactoseF: true,
		nutsF: true,
		org: true,
		price: 1.99
	},
	{
		name: "noodles  (0.99)",
		lactoseF: true,
		nutsF: true,
		org: false,
		price: 0.99
	},
	{
		name: "milk  (2.50)",
		lactoseF: false,
		nutsF: true,
		org: true,
		price: 2.50
	},
	{
		name: "rice  (7.99)",
		lactoseF: true,
		nutsF: true,
		org: true,
		price: 7.99
	},
	{
		name: "red wine (14.99)",
		lactoseF: true,
		nutsF: true,
		org: true,
		price: 14.99
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		prods.sort(function(a, b){return a.price - b.price}); //sort product list by price
		if ((restriction == "Lactose") && (prods[i].lactoseF == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Nuts") && (prods[i].nutsF == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].org == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}