import { authReducer, types } from '../../../src/auth';

describe('Pruebas en authReducer', () => {
  test('should Debe de retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {});

    expect(state).toEqual({ logged: false });
  });

  test('should Debe de (login) llamar el login autenticar y establecer el user', () => {
    const action = {
      type: types.login,
      payload: { name: 'Axel', id: '123' },
    };

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test('should Debe (logout) de borrar el name del usuario y logged en false', () => {
    const state = {
      logged: true,
      user: { id: '123', name: 'Axel' },
    };
    const actions = {
      type: types.logout,
    };

    const newState = authReducer(state, actions);
    expect(newState).toEqual({ logged: false });
  });
});
