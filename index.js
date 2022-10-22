const redux = require ('redux')
const { createStore, combineReducers } = redux
//essa função é criadora de um tipo de ação
const criarContrato = (nome, taxa) => {
  return {
    //type é obrigatório
    type: "CRIAR_CONTRATO",
    payload:{
      nome,
      taxa      
    } 
  }
}
//essa função é criadora de um tipo de ação
const cancelarContrato = (nome) => {
  return {
    type: "CANCELAR_CONTRATO",
    payload: { nome }  
  }
}
//essa função é criadora de um tipo ação
const solicitarCashback = (nome, valor) => {
  return {
    type: "CASHBACK",
    payload: {
      nome, valor
    }
  }
}

//essa função é um reducer
const historicoDePedidosDeCashback = (historicoDePedidosDeCashbackAtual = [], acao) => {
  if (acao.type === "CASHBACK"){
    return [...historicoDePedidosDeCashbackAtual, acao.payload]  
  }
  return historicoDePedidosDeCashbackAtual  
}
//essa função é um reducer
const caixa = (dinheiroEmCaixa = 0, acao) => {
  if (acao.type === "CASHBACK")
    dinheiroEmCaixa -= acao.payload.valor
  else if (acao.type === "CRIAR_CONTRATO")
    dinheiroEmCaixa += acao.payload.taxa
  return dinheiroEmCaixa
}
//essa função é um reducer
const contratos = (listaDeContratoAtual = [], acao) => {
  if (acao.type === "CRIAR_CONTRATO")
    return [...listaDeContratoAtual, acao.payload]
  if (acao.type === "CANCELAR_CONTRATO")
    return listaDeContratoAtual.filter(c => c.nome !== acao.payload.nome)
  return listaDeContratoAtual
}

const todosOsReducers = combineReducers({
  historicoDePedidosDeCashback,
  caixa,
  contratos
})


const store = createStore(todosOsReducers)
store.dispatch(criarContrato("José", 50))
store.dispatch(criarContrato("Maria", 50))
store.dispatch(solicitarCashback("Maria", 10))
store.dispatch(solicitarCashback('José', 20))
store.dispatch(cancelarContrato('Maria'))
console.log(store.getState())
