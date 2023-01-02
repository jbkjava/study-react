import React from "react";

const UnitConverser = function(){
    return(
        <div className="unitConverser">
            <h2>값 변환 계산기</h2>
            <div className="unitConverserContainer">
                <div>
                    <input type="number"></input>
                    <select>
                        <option value="">--선택해주십시오.</option>
                        <option value="mm">밀리미터(mm)</option>
                        <option value="cm">센티미터(cm)</option>
                        <option value="m">미터(m)</option>
                        <option value="km">킬로미터(km)</option>
                    </select>
                </div>
                <div>
                    <p>변환 결과</p>
                    <span>{}("valueType")</span>
                </div>
            </div>
        </div>
    );
}