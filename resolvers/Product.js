const Product = {
  organisation: (parent, args, ctx) => {
    const parentOrganisationId = parent.organisationId;
    return (
      allOrgs.filter((eachOrg) => eachOrg._id === parentOrganisationId)?.[0] ??
      {}
    );
  },
};

module.exports = {
  Product,
};
