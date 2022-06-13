const Query = {
  queryProduct: (parent, args, ctx) => {
    const { allProducts } = ctx;
    return allProducts;
  },
  getProductById: (parent, args, ctx) => {
    const { allProducts } = ctx;
    const argId = args.id;
    return (
      allProducts.filter((eachProduct) => eachProduct._id === argId)?.[0] ?? {}
    );
  },
  queryOrganisation: (parent, args, ctx) => {
    const { allOrgs } = ctx;
    return allOrgs;
  },
  getOrganisationById: (parent, args, ctx) => {
    const { allOrgs } = ctx;
    const argId = args.id;
    return allOrgs.filter((eachOrg) => eachOrg._id === argId)?.[0] ?? {};
  },
};

module.exports = {
  Query,
};
