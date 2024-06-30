'use client'
import {atom} from 'recoil'

type authModalState = {
    isOpen: boolean,
    type: 'login' | 'signup' | 'passwordreset',
}

const initialState: authModalState = {
    isOpen: false,
    type: 'login',
}
 
export const authModalState = atom<authModalState>({
  key: 'authModalAtom',
  default: initialState,
})