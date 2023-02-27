// JSON => JavaScript Object Notation
const user = {id: 1, name: 'Abrar Fahad', job: 'student'};
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner: 'Alia',
    address: {
        street: 'Kochukhet Goli',
        city: 'Dellhi',
        country: 'India'
    },
    product: ['Laptop','Mic', 'Phone','Monitor'],
    revenue: 50000,
    open: true,
    isNew: false

}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj)