const inputs = {
  density: {
    value: 19.3,
    unity: '',
  },
  price: {
    value: 144,
    unity: '',
  },
  celerity: {
    value: 5174,
    unity: '',
  },
  hardness: {
    value: 100,
    unity: '',
  }
};

const criterias = {
  density: {
    base: 8.96,
    multiplicator: 10,
  },
  price: {
    base: 178.73,
    multiplicator: -0.01,
  },
  celerity: {
    base: 3570,
    multiplicator: 0.002,
  },
  hardness: {
    base: 87,
    multiplicator: -0.2,
  },
};

const density = (inputs.density.value - criterias.density.base) * criterias.density.multiplicator;
const price = (inputs.price.value - criterias.price.base) * criterias.price.multiplicator;
const celerity = (inputs.celerity.value - criterias.celerity.base) * criterias.celerity.multiplicator;
const hardness = Math.abs(inputs.hardness.value - criterias.hardness.base) * criterias.hardness.multiplicator;

const totalIndex = density + price + celerity + hardness;

// console.log(density);
// console.log(price);
// console.log(celerity);
// console.log(hardness);
console.log(totalIndex);
