import {render, screen} from "@testing-library/react"
import App from "./App"


function sum(n1: number, n2: number){
    return n1 + n2
}

function media(n1: number, n2: number){
    const media = (n1 + n2) / 2

    if(media >= 6){
        return "Aprovado"
    }else{
        return "Recuperação"
    }
}

describe("First test app component", () => {

    it("should adds 1 + 2 to equal 3", () => {
        expect(1).toBe(1)
    })

    it("should adds 5 + 2 to equal 7", () => {
        expect(sum(5, 2)).toBe(7)
    })

    it("should calculate the ovarage on return result", () => {
        expect(media(5, 8)).toBe("Aprovado")
    })

})

describe("App component", () => {
    it("should render app component", () => {
        render(<App />)
        
        screen.getByText("Leonardo")
    })
})

export default {}