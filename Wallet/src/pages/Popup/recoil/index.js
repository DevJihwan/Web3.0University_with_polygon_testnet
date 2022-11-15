import { atom } from 'recoil';

export const pageState = atom({
    key: 'page',
    default: 'Home'
})

export const encryptMnemonicState = atom({
    key: 'encrypt-mnemonic',
    default: ''
})

export const mnemonicState = atom({
    key: 'mnemonic',
    default: ''
})

export const pairState = atom({
    key: 'pair',
    default: {}
})