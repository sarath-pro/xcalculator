import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");

  function calculateAnswer() {
    if (question.length === 0) {
      setAnswer("Error");
      return;
    }else if(question.includes('0/0')) {
        setAnswer("NaN");
        return;
    }else if(question.includes('/0')) {
        setAnswer("Infinity");
        return;
    }
    console.log(question);
    let numbers = question.split('');
    // let syms = question.split(/\d/);
    // syms = syms.filter((x) => x !== "");
    console.log(numbers);
    let arr = []
    let val = ''
    numbers.forEach((x)=>{
        if(x>='0' && x<='9') {
            console.log('number:: ', x)
            val += x
        }else {
            arr.push(val)
            console.log('operator:: ', x)
            val = ''
            arr.push(x)
        }
    })
    arr.push(val)
    console.log('arr:: ',arr)
    arr.indexOf()
    // console.log(syms);
    while(arr.indexOf('/')>=0) {
        let pos = arr.indexOf('/')
        console.log('pos:: ',pos)
        if(pos===0 && pos===arr.length-1) {
            setAnswer('Error')
            return
        }
        console.log('val1:: ', arr[pos-1], ', val2:: ', arr[pos+1])
        let val = Number(arr[pos-1])/Number(arr[pos+1])
        console.log('val:: ', val)
        arr.splice(pos-1, 3, String(val))
    }
    console.log('after division')
    console.log(arr)
    while(arr.indexOf('*')>=0) {
        let pos = arr.indexOf('*')
        console.log('pos:: ',pos)
        if(pos===0 && pos===arr.length-1) {
            setAnswer('Error')
            return
        }
        console.log('val1:: ', arr[pos-1], ', val2:: ', arr[pos+1])
        let val = Number(arr[pos-1])*Number(arr[pos+1])
        console.log('val:: ', val)
        arr.splice(pos-1, 3, String(val))
    }
    console.log('after multiplication')
    console.log(arr)
    let ans = Number(arr[0]);
    let prev = arr[1];
    for(let i=2;i<arr.length;i+=2) {
        if(prev=='+') {
            ans += Number(arr[i])
        } else {
            ans -= Number(arr[i])
        }
        if(i+1<arr.length) {
            prev = arr[i+1];
        }
    }
    setAnswer(String(ans))
  }
  



  return (
    <div className="container">
      <h1>React Calculator</h1>
      <input name="display" value={question} readOnly />
      {answer.length > 0 && <div>{answer}</div>}
      <div className="calc-buttons">
        <div>
          <button
            onClick={() => {
              setQuestion((prev) => prev + "7");
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              setQuestion((prev) => prev + "8");
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              setQuestion((prev) => prev + "9");
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              setQuestion((prev) => prev + "+");
            }}
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setQuestion((prev) => prev + "4");
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              setQuestion((prev) => prev + "5");
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              setQuestion((prev) => prev + "6");
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              setQuestion((prev) => prev + "-");
            }}
          >
            -
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setQuestion((prev) => prev + "1");
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              setQuestion((prev) => prev + "2");
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              setQuestion((prev) => prev + "3");
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              setQuestion((prev) => prev + "*");
            }}
          >
            *
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setQuestion("");
              setAnswer("");
            }}
          >
            C
          </button>
          <button
            onClick={() => {
              setQuestion((prev) => prev + "0");
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              calculateAnswer();
            }}
          >
            =
          </button>
          <button
            onClick={() => {
              setQuestion((prev) => prev + "/");
            }}
          >
            /
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
