import state from './state'
import { 
    CHANGE_USER_STATE,
    CHANGE_MENU_CONFIG,
    CHANGE_NEW,
    CHANGE_THOER,
    CHANGE_WORD,
    CHANGE_MONEY
} from './const'

const reducer = (previousState = state, action) => {
        let new_state = { ...previousState }

        switch ( action.type ) {
           case CHANGE_USER_STATE:
                new_state.user_state = action.user_state;
           break;

           case CHANGE_MENU_CONFIG:
                new_state.menu_config = action.menu_config;
           break;
           case CHANGE_NEW:
                new_state.new = action.new;
           case CHANGE_THOER:
                new_state.other = action.other;
           break;
           case CHANGE_WORD:
                new_state.work = action.work;
           break;
           case CHANGE_MONEY:
                new_state.money = action.money;
           break;

            default: break;
        }

        return new_state

}

export default reducer


