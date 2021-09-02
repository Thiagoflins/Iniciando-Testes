function recebimento (valorDaParcela, diaPagamento, diaVencimento){
    if (diaPagamento > diaVencimento){
        var valor = (diaPagamento - diaVencimento) * 1.5 + valorDaParcela;
        return valor;
        
    }else{

        return valorDaParcela;
    }
    
}

module.exports = {recebimento}