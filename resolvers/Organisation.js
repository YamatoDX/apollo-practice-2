const Organisation = {
  products: (parent, args, ctx) => {
    const { allProducts } = ctx;
    const parentId = parent._id;
    return allProducts.filter(
      (eachProduct) => eachProduct.organisationId === parentId
    );
  },
};

module.exports = {
  Organisation,
};
