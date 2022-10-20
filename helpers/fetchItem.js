const fetchItem = async (pesquisa) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/items/${pesquisa}`;
  try {
    const resul = await fetch(url);
    const resulJson = await resul.json();
    return resulJson;
  } catch (err) {
    return 'You must provide an url';
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
