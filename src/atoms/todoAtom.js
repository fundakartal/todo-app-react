import { atom } from 'recoil'

export const loginState = atom({
  key: 'loginState',
  default: false,
})

export const userState = atom({
  key: 'userState',
  default: '',
})

export const todoListState = atom({
  key: 'todoListState',
  default: [],
})