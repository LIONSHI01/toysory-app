export const selectAllProducts = (state) => state.product.allProductsArr;

const filterCategory = (products) => {
  const categories = products.map((product) => product.category);
  const uniqCategories = [...new Set(categories)];
  return uniqCategories;
};

export const selectCategories = (state) =>
  filterCategory(state.product.allProductsArr);
