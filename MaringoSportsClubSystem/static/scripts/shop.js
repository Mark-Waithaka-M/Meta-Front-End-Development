let  sales_items = ['bloomer', 'gamers_short', 'hockey_stick', 'socks', 'sports_shoes', 'tracksuit', 't-shirt', 'wrapper']
let sports_shoes_brands = ['nike', 'adidas', 'under_armour', 'jordan', 'new_balance']

let items_prices = {
    bloomer : 250,
    gamers_short : 750,
    hockey_stick : 2000,
    socks: 250,
    sports_shoes_brands:[{nike:4000, adidas:3000, under_armour: 2000, jordan: 2500, new_balance: 1000}],
    track_suit:1000,
    t_shirt: 800,
    wrapper: 450
}
console.log('This is a list of items we are selling and their prices for each item.');

for (const key of Object.keys(items_prices)) {
    if (key === 'sports_shoes_brands') {
        for (const brand of sports_shoes_brands) {
            const brandPrices = items_prices[key][0]; // Access the array and get the object
            console.log(`${brand} : ${brandPrices[brand]}`);
        }
    } else {
        console.log(key + ':' + items_prices[key]);
    }
}