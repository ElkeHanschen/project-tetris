// simple function example
function showAlert(firstName) {
    alert(firstName + ', alarm');
}
showAlert('Watchwomen');

// same function, passed array items
const name = ['nameone', 'nametwo'];
function showAlert() {
    alert(name[0] + ' ' + name[1] + ', alarm');
}
showAlert();

// simple example how to use forEach() within an array
let names = ['Billy', 'Edna', 'Ludwig', 'Hildegard'];
// important to remember what's inbuilt!
// names is the array, forEach is the inbuilt method, arrayItems references to items in array
names.forEach(arrayItem => {
    console.log(arrayItem + ' is on here');
})
