export const types = {
    SELECIONA_JOGO: "SELECIONA_JOGO"
}

export const actions = {
    selecionaJogo: (jogoClicado) => ({
        type: types.SELECIONA_JOGO,
        jogoClicado: jogoClicado
    })
}

const INITIAL_STATE = {
    jogoAtual: null
}
export const reducer = (state = INITIAL_STATE, action) => {
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case types.SELECIONA_JOGO:
            newState.jogoAtual = action.jogoClicado
            break
        default:
            console.log("DEFAULT")
            break
    }

    return newState
}