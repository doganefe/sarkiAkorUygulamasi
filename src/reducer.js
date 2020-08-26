export const initialState = {
    user: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            // console.log("reducer'a girdik")
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default reducer