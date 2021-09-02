const {recebimento} = require ('../src/recebimento.js')

describe('Testando valor de pagamento atrasado', ()=>{
    test('1.1 valor = 20, dia do pagamento = 15, dia do vencimento = 10',() =>{
        expect(recebimento(20,15,10)).toBe(27.5)
    })
})

describe('Testando pagamento em dia', ()=>{
    test('1.2 valor = 20, dia do pagamento = 10, dia do vencimento = 10',()=>{
        expect(recebimento(20,10,10)).toBe(20)
    })
})

describe('Testando pagamento adiantado', ()=>{
    test('1.3 valor = 20, dia do pagamento = 8, dia do vencimento = 10',()=>{
        expect(recebimento(20,8,10)).toBe(20)
    })
})