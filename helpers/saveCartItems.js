const saveCartItems = (param) => {
  // seu código aqui
  localStorage.setItem('cartItems', JSON.stringify(param));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
