const p0 = 2;
const Peven = [p0];
const Podd = [];

const newPrimes = [];
const PrimesByIteration = [];
const PrimesStack = [];

const product = (x) => {
    return Peven.concat(Podd).map(pi => {
        return Math.sin((Math.PI * x) / pi)
    }).reduce((acc, c) => acc * c);
}

const init = () => {
    let x;
    if (Podd.length) {
        x = Podd[Podd.length - 1] ** 2 + 2
    } else {
        x = Peven[0] + 1
    }
    return x;
}

const limit = 3;
for (var j = 0; j < limit; j++) {
    for (var x = init(); ; x += 2) {
        if (PrimesStack.length && x >= PrimesStack[0] ** 2) {
            break;
        }
        const d = product(x);

        console.log('d', d)
        if (Math.abs(d) < (10 ** -13)) {// === 0 float number approximation

        } else {// !==0
            newPrimes.push(x);
            PrimesStack.push(x);
        }
    }

    PrimesByIteration.push(newPrimes.slice(0));
    newPrimes.length = 0;
    Podd.push(PrimesStack.shift());
}

console.log(
    'Peven', Peven,
    'Podd', Podd,
    'PrimesByIteration', PrimesByIteration, PrimesByIteration.map(x => x.length),
    'PrimesStack', PrimesStack
);
