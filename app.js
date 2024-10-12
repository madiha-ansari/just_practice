var screenDiv = document.getElementsByClassName("screen")[0]

function getValue(value) {

    switch (value) {

        case '=':
            var res = eval(screenDiv.innerText);
            screenDiv.innerText = res;
            break

        case '':
            screenDiv.innerText = '';
            break;
        case 'back':
            screenDiv.innerText = screenDiv.innerText.slice(0, screenDiv.innerText.length - 1);
            break;
        default:
            screenDiv.innerText += value;

    }

}


















function findMax(a, b) {
    if (a > b) {
        return a; // Agar a bada hai, to a ko return karo
    } else {
        return b; // Warna b ko return karo
    }
}

// let maxNumber = findMax(10, 20); 
// Function ko call karna
console.log(findMax(10, 20)); // Output: 20
