const fetchProducts = async (pesquisa) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${pesquisa}`;

  try {
    const resul = await fetch(url);
    const data = await resul.json();
    return data;
  } catch (err) {
    return 'You must provide an url';
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
