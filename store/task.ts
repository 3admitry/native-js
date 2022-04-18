export const SUM = 'SUM';
export const SUB = 'SUB';
export const MULT = 'MULT';
export const DIV = 'DIV';

export type actionType = {
    type: string,
    num: number
}

export const numberReducer = (state:number, action:actionType) => {
    switch (action.type) {
        case SUM:
            return state+action.num;
        case SUB:
            return state-action.num;
        case MULT:
            return state*action.num;
        case DIV:
            return state/action.num;
        default:
            return state;
    }
}