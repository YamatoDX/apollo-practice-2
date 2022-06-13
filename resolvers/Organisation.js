const Organisation = {
  products: (parent, args, ctx) => {
    const parentId = parent._id;
    return allProducts.filter(
      (eachProduct) => eachProduct.organisationId === parentId
    );
  },
};

module.exports = {
  Organisation,
};
