const { allProducts, allOrgs } = require("../db");
const Query = {
  queryProduct: () => allProducts,
  getProductById: (parent, args, ctx) => {
    const argId = args.id;
    return (
      allProducts.filter((eachProduct) => eachProduct._id === argId)?.[0] ?? {}
    );
  },
  queryOrganisation: () => allOrgs,
  getOrganisationById: (parent, args, ctx) => {
    const argId = args.id;
    return allOrgs.filter((eachOrg) => eachOrg._id === argId)?.[0] ?? {};
  },
};

module.exports = {
  Query,
};