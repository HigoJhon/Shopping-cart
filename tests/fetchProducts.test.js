require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const item = require('../mocks/item');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it("testando se é uma função", () => {
    expect(typeof fetchProducts).toBe('function');
  })
  it("testando caso passado computador como argumento da funcão, fetch é chamada", async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  it("testando caso passado computador como argumento da função, fetch utilaza o endpoint", async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/sites/MLB/search?q=computador")
  })
  it("testando caso passado computador como argumento da função, é uma estrutura de dados igual ao objeto", async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  })
  it("Caso chame a função sem argumente retonar error", async () => {
    await fetchProducts();
    try {
      expect(fetchProducts).toBe('You must provide an url');
    } catch (error) {
      error
    }
  })
  // fail('Teste vazio');
});
