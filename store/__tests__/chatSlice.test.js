/**
 * 
 * 
// Test 1
import { setChatsData } from './chatsSlice'

test('chatsSlice.setChatsData() sets chatsData', () => {
  const chatsData = { foo: 'bar' }
  
  const action = setChatsData({ chatsData })
  expect(action).toEqual({
    type: 'chats/setChatsData',
    payload: { chatsData },
  })
})

// Test 2
import { setChatsData, chatsReducer } from './chatsSlice'

test('chatsReducer handles setChatsData action', () => {
  const initialState = {
    chatsData: {},
  }
  const chatsData = { foo: 'bar' }
  
  const action = setChatsData({ chatsData })
  const state = chatsReducer(initialState, action)
  expect(state).toEqual({
    chatsData,
  })
})

// Test 3
import { chatsReducer } from './chatsSlice'

test('chatsReducer returns initial state', () => {
  const initialState = {
    chatsData: {},
  }
  
  const action = { type: 'unknown' }
  const state = chatsReducer(initialState, action)
  expect(state).toEqual(initialState)
})

// Test 4
import { setChatsData, chatsReducer } from './chatsSlice'

test('chatsReducer merges chatsData', () => {
  const initialState = {
    chatsData: {
      foo: 'bar',
    },
  }
  const chatsData = { baz: 'qux' }
  
  const action = setChatsData({ chatsData })
  const state = chatsReducer(initialState, action)
  expect(state).toEqual({
    chatsData: {
      foo: 'bar',
      baz: 'qux',
    },
  })
})

// Test 5
import { setChatsData, chatsReducer } from './chatsSlice'

test('chatsReducer does not mutate state', () => {
  const initialState = {
    chatsData: {
      foo: 'bar',
    },
  }
  const chatsData = { baz: 'qux' }
  
  const action = setChatsData({ chatsData })
  const state = chatsReducer(initialState, action)
  expect(state).not.toBe(initialState)
})

// These tests check the functionality of the chatsSlice and its associated reducer. The first test checks that setChatsData() sets the chatsData correctly. The second test checks that the chatsReducer handles setChatsData correctly and updates the state correctly. The third test checks that the chatsReducer returns the initial state correctly when given an unrecognized action type. The fourth test checks that the chatsReducer merges the new chatsData correctly rather than overwriting it. The fifth test checks that the chatsReducer does not mutate the original state.


 */
