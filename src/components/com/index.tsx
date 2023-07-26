import * as React from "react";
import { Button } from "antd";
import { increment,decrement,selectCount } from "@/store/com";
import { useAppDispatch,useAppSelect } from "@/store/app/hook";

// import _s from "../app.less";

const Com =()=>{
  const count = useAppSelect(selectCount)
  const dispatch = useAppDispatch()


  return (
    <div className="sss" >
      <h2>{count}</h2>
      <Button onclick={()=>dispatch(increment())} type="primary">=</Button>
      <Button onclick={()=>dispatch(decrement())} type="primary">-</Button>
    </div>
  )
}

export default Com