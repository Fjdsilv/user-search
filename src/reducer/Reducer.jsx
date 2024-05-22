import { 
    LOADING,
    DISPLAY_USERS, 
    DISPLAY_SINGLE_USER,
    CLEAR_USERS,
    SET_ALERT,
    REMOVE_ALERT,
} from "./actions";

const reducer = (state, action) => {
    
    switch(action.type) {
        case LOADING:
            return { ...state, isLoading: true };
        case DISPLAY_USERS:
            return { ...state, users: action.payload.items, isLoading: false };
        case DISPLAY_SINGLE_USER:
            return { ...state, user:  action.payload.data , isLoading: false };
        case CLEAR_USERS:
            return { ...state, users: [] };
        case SET_ALERT:
            return { ...state, alert: { msg: action.payload.msg, type: action.payload.type } };
        case REMOVE_ALERT:
            return { ...state, alert: null };
        default:
            return state;
    }

}
export default reducer;