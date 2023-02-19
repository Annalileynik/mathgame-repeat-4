import './App.css';
import {useState} from "react";


const operandSet = ['+', '-', '*']

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomOperand = () => operandSet[random(0, 2)]
const numberRandom = () => random(1, 15)
const calculate = (n1, n2, operand) => {
    if (operand === "+") return n1 + n2
    if (operand === "-") return n1 - n2
    if (operand === "*") return n1 * n2
}

function App() {
    const n1Initial = numberRandom()
    const n2Initial = numberRandom()
    const operandInitial = getRandomOperand()

    const [n1, setN1] = useState(n1Initial)
    const [n2, setN2] = useState(n2Initial)

    const [operand, setOperand] = useState(operandInitial)
    const [result, setResult] = useState(calculate(n1Initial, n2Initial, operandInitial))
    const [answer, setAnswer] = useState('')
    const [resolution, setResolution] = useState('')
    const [countC, setCountC]=useState(0)
    const [countI, setCountI]=useState(0)

    const shake = () => {
        const n1 = numberRandom(), n2 = numberRandom(), operand = getRandomOperand()
        setN1(n1)
        setN2(n2)
        setOperand(operand)
        setResult(calculate(n1, n2, operand))
    }
    const onChangeAnswer = (event) => {
        setAnswer(+event.target.value)
    }
    const check = () => {
       if (answer === result) {
           setResolution('Correct')
           setCountC(countC+1)
       }else {
           setResolution('Incorrect')
           setCountI(countI+1)
       }
        shake('')
        setAnswer('')
       }

    return (
        <div className="App">
            {n1}{operand}{n2}=<input type='number' value={answer} onChange={onChangeAnswer}/>
            <button onClick={check}>Check</button>
            <hr/>
            <button onClick={shake}>Shake</button>
            <hr/>
            {resolution}
            <hr/>
           Correct: {countC}
            <hr/>
            Incorrect: {countI}
        </div>
    );
}

export default App;
