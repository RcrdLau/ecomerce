import { combineReducers } from 'redux'

import { reducer as jogos } from './Jogos'
import { reducer as pagina } from './Pagina'

export default combineReducers({
    jogos,
    pagina,
})