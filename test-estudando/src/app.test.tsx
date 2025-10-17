
function sum(n1: number, n2: number){
    return n1+n2
}

function media(n1: number, n2: number){

    const resultado = (n1 + n2) / 2
    if(resultado >= 6){
        return "passou"
    }
    else{
        return "reprovado"
    }
}

//Criar um bloco que agrupo varios testese relacionados
describe("First test app component", () => {
    
    it("should add 5 + 2 to equal 7", () => {
        expect(sum(5, 2)).toBe(7)
    })

    it("Calculate the average and return whether you passed or failed", () => {
        expect(media(6, 7)).toBe("passou")
        expect(media(5, 5)).toBe("reprovado")
    })


})

export default {}