import { combineReducers } from 'redux'

import { reducer as jogos } from './Jogos'
import { reducer as destaque } from './Destaque'

export default combineReducers({
    jogos,
    destaque,
})