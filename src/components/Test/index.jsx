import React, { useEffect } from "react";
import "./style.scss";
function Test(params) {
    console.log("test body");
    useEffect(()=>{
        console.log("test ussefect");
        return ()=>{
            console.log("ussefect return");
        }
    })
    return <div>Test</div>
}
export default Test;