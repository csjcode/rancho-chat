/**
 * 
// Test Code

import { createStore } from 'redux'
import menuReducer from './reducers/menuReducer'

describe('Menu Slice Reducer', () => {
  let store
  beforeEach(() => {
    store = createStore(menuReducer)
  })

  // Test 1
  it('should set the initial state', () => {
    const expectedState = {
      storedMenu: {
        map: true,
        tricks: true,
      },
    }
    expect(store.getState()).toEqual(expectedState)
  })

  // Test 2
  it('should set the stored menu', () => {
    const expectedState = {
      storedMenu: {
        map: true,
        tricks: false,
        profile: true,
      },
    }
    store.dispatch(setStoredMenu(expectedState.storedMenu))
    expect(store.getState()).toEqual(expectedState)
  })

  // Test 3
  it('should set the stored menu to null', () => {
    store.dispatch(setStoredMenu(null))
    expect(store.getState().storedMenu).toBeNull()
  })

  // Test 4
  it('should not set the stored menu to an invalid value', () => {
    const expectedState = {
      storedMenu: {
        map: true,
        tricks: false,
        profile: true,
      },
    }
    store.dispatch(setStoredMenu('invalid'))
    expect(store.getState()).toEqual(expectedState)
  })

  // Test 5
  it('should not modify the initial state', () => {
    const expectedState = {
      storedMenu: {
        map: true,
        tricks: true,
      },
    }
    expect(store.getState()).toEqual(expectedState)
  })
})

// The tests above test the menu slice reducer. Test 1 checks that the initial state is set correctly. Test 2 tests that the stored menu is set properly. Test 3 checks that the stored menu can be set to null. Test 4 checks that an invalid value is not set as the stored menu. Test 5 confirms that the initial state is not modified.
 */
