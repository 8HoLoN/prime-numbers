const p0 = 2;
const p1 = 3;
const P = [p0, p1];

const newPrimes = [];
const PrimesByIteration = [];

let index = 0;

const product = (x) => {
    return P.filter((pi, i) => i <= index).map(pi => {
        return Math.sin((Math.PI * x) / pi)
    }).reduce((acc, c) => acc * c);
}

const limit = 4;
for (var j = 0; j < limit; j++) {
    for (var x = P[index] ** 2 + 1; ; x += 1) {
        if (x >= P[index + 1] ** 2) {
            break;
        }
        const d = product(x);

        console.log('d', d)
        if (Math.abs(d) < (10 ** -13)) {// === 0 float number approximation

        } else {// !==0
            newPrimes.push(x);
            P.push(x);
        }
    }
    index++;

    PrimesByIteration.push(newPrimes.slice(0));
    newPrimes.length = 0;
}

console.log(
    'P', P,
    'PrimesByIteration', PrimesByIteration, PrimesByIteration.map(x => x.length)
);
