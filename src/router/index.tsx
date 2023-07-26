import * as React from "react";
import { Route ,Routes } from "react-router-dom";
import {lazy} from "react"

const Com = lazy(
  () => import(/* webpackChunkName: "com" */ "../components/com")
);

const routes = [{title:"页面标题",path:"/hello",component:Com}]

const RoutersConfig =()=>{
  return (
    <React.Suspense fallback>
      <div>sss</div>
      <Routes>
      {routes.map((route, i) => {
          document.title = route.title || "";
          return (
            <Route path={route.path} key={i} element={<route.component />} />
          );
        })}
      </Routes>
    </React.Suspense>
  )
}

export default RoutersConfig