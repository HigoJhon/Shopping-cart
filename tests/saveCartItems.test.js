const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it('Ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado', () => {
     saveCartItems("cartItem");
    expect(localStorage.setItem).toHaveBeenCalled();
  })
  it('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado com dois parâmetros', () => {
    const param = "";
    saveCartItems(param);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', param);
  });
  // fail('Teste vazio');
});
