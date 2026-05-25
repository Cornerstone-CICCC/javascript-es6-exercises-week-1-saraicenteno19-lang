var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

for (let i in donuts) {
  console.log(`${donuts[i].type} donuts cost $${donuts[i].cost} each`);
}