 type User = {
    name: 'mike',
    show:() => void;
 }

 type Customer = {
    name: 'beer',
    buy: () => void
 }
 type Sale =User | Customer;

 function handleSale(sale: Sale) {
    if (sale.name === 'beer') {
        sale.buy();
    }else{
        sale.show();
    }
 }