import React from "react";
import './counter.css';
const FirstComponent = function(){
    const [counter, setCount] = React.useState(0);

    const increase = () =>{
        setCount((prev) => (prev+1));
    }

    const decrease = () =>{
        if(counter > 0){
            setCount((prev) => (prev-1));
        }else{
            setCount(0);
        }
        
    }

    console.log("rendered");
    console.log(`counterValue: ${counter}`);
    return (<div className="counterComponent">
        <h2>카운터 컴포넌트</h2>
      <div className="counterContainer">
        <button onClick={decrease}>-</button>
        <span className="currentValue">{counter}</span>
        <button onClick={increase}>+</button>
      </div>
    </div>);
    /**
     *  react가 상태 변화에 대응하는 법.
     *  state접근 함수로 state를 변화를 줌 -> 변화된 state값을 지닌 컴포넌트의 재생성.
     */
};

export default FirstComponent;