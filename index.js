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
