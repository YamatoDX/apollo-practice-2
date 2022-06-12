const allProducts = [
  {
    _id: "D01",
    name: "Grand Barossa",
    currency: "USD",
    price: 200.2,
    country: "United States",
    city: "LA",
    productId: "D01",
    organisationId: "Mercury",
  },
  {
    _id: "D02",
    name: "Devil May Cry",
    currency: "SGD",
    price: 100.4,
    country: "United Kingdom",
    city: "Londom",
    productId: "D02",
    organisationId: "Venus",
  },
];

const allOrgs = [
  {
    _id: "Mercury",
    name: "Mercury Org",
    city: "LA",
    country: "USA",
  },
  {
    _id: "Venus",
    name: "Venus Pte Ltd",
    city: "London",
    country: "UK",
  },
];

module.exports = {
  allOrgs,
  allProducts,
};
