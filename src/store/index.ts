import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { settingsReducer } from "./settings/slice";

// const loggerMiddleware: Middleware<object, AppState> = (store) => (next) => (action) => {
//   console.log("dispatching", action);
//   const result = next(action);
//   console.log("next state", store.getState());
//   return result;
// };

const rootReducer = combineReducers({
  settings: settingsReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) => gDM().concat([]),
});

// RootState type taken from rootReducer to deal with cicle typing
// (to infer AppState need to create store(for this we need middleware),
// but to declare middleware we need to have AppState type)
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
