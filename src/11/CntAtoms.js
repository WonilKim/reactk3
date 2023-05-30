import { atom, selector } from "recoil";

export const CntAtoms = atom({
    key : 'count',
    default : 0,
});

export const CntAtomsTwice = selector({
    key : 'countTwice',
    get : ({get}) => {
        return get(CntAtoms) * 2;
    },
});