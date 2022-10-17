const getSavedCartItems = () => {
  // seu código aqui
  const items = JSON.parse(localStorage.getItem('cartItems')) || [];
  items.forEach((a) => {

  });
  return items;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
