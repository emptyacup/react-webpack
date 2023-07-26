import { configureStore,ThunkAction,Action } from "@reduxjs/toolkit";
import counterReducer from "../com"

export const store = configureStore({
  reducer:{
    counter:counterReducer,
  }
})

export type AppDispatch = typeof store.dispatch
export type Rootstate = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,Rootstate,unknown,Action<string>>
