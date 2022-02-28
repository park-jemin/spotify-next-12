import { atom } from 'recoil'

export const playlistState = atom({
  key: 'playlistState',
  default: null,
})

// cannot have two atoms with the same key
export const playlistIdState = atom({
  key: 'playlistIdState',
  default: '1LznwRayYl0RXiNkZEeTnl',
})
