
const person = {
    firstname: 'Petras',
    age: 99,
    isMarried: true,
    7: 'septyni',
    77: 'septyni septyni',
    '': 'tuscia',
    _: 'underscore',
    'is/legit': false,
}

const kaNoriuSuzinoti = 'is/legit';

const atsakymas = person[kaNoriuSuzinoti];

console.log(person);
console.log(`${kaNoriuSuzinoti}: ${atsakymas}`);

