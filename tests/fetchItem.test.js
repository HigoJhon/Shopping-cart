require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it("test fetchItem é uma function", () => {
    expect(typeof fetchItem).toBe('function');
  })
  it("test fetchItem com argumento MLB1615760527 é chamado fetch", async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalled();
  })
  it('test fetchItem com argumento MLB1615760527, fetch utiliza o endpoint', async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
  })
  it("test fetchIntem com o arfumento MLB1615760527, é uma estrutura de dados igual ao objeto item", async () => {
    expect(await fetchItem("MLB1615760527")).toEqual(item);
  })
  it("test fetchItem sem argumento retorna error", async () => {
    await fetchItem();
    try {
      expect(fetchItem).toBe('You must provide an url');
    } catch (error) {
      return 'You must provide an url';
    }
  })
  // fail('Teste vazio');
});
