import React from "react";
import './counter.css';
const FirstComponent = function(){
    const [counter, setCount] = React.useState(0);

    const increase = () =>{
        setCount((prev) => (prev+1));
        //modifierFunction([callbackFunction],[initialValue])
        //(currentValueParam) => (setNextState) ex) => ({object}, (curr +- a), (curr + text).... )
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
     *  똘똘한 react.js는 가상의 돔(Virtual Dom)을 사용해서 
     *  재생성된 컴포넌트 중 변화된 UI만 재적용한다.
     * 
     *  예시) 네이버 탭메뉴
     *  1 2 3 메뉴가 있고, 각각에는 고유의 UI와 서버로부터 얻어오는 데이터가 있다.
     *  각각 메뉴가 state가 되고, 변경된 state에 해당하는 컴포넌트가 서버로 부터 얻은 데이터를 가지고 출력될 것이다.
     */
};

export default FirstComponent;