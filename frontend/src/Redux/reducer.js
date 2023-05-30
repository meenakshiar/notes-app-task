import * as types from './action.types'
const initialState = {
    loading: false,
    error: false,
    notes: []
}

const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.LOADING:
            return { ...state, loading: true }
        case types.ERROR:
            return { ...state, error: true, loading: false }
        case types.GETNOTES:
            return { ...state, notes: payload, loading: false }
        case types.ADDNOTES:
            return { ...state, notes: [payload, ...state.notes] }
        case types.DELETENOTES: {
            let x = state.notes.filter((item) => {
                return item.id !== payload.id
            })
            return { ...state, notes: x }
        }
        case types.UPDATENOTES: {
            return {
                ...state, notes: state.notes.map((item) =>
                    item.id === payload.id ? payload : item)
            }
        }
        default:
            return state
    }
}
export default Reducer