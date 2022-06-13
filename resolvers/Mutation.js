const Mutation = {
  addProduct: (parent, args, ctx) => {
    const { _id, name, organisationId } = args;
    let { allProducts } = ctx;
    const newProdct = {
      _id,
      name,
      organisationId,
    };
    const newProducts = [...allProducts, newProdct];
    allProducts = newProducts;
    return newProdct;
  },
  deleteProduct: (parent, args, ctx) => {
    let { allProducts } = ctx;
    const argsId = args._id;
    allProducts = allProducts.filter((eachProduct) => {
      return eachProduct._id !== argsId;
    });
    return {
      _id: argsId,
    };
  },
  deleteOrg: (parent, args, ctx) => {
    let { allOrgs } = ctx;
    const argsId = args._id;
    allOrgs = allOrgs.filter((eachOrg) => {
      return eachOrg._id !== argsId;
    });
    return {
      _id: argsId,
    };
  },
};

module.exports = {
  Mutation,
};
