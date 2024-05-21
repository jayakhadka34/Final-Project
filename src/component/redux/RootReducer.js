import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createResetMetaReducer } from "./slices/MetaReducer";
import authSlice from "./slices/LoginSlices"
import AddToCard from "./slices/AddToCard";
const resetSlices = [
  "addtocard",
  "auth",
  
 
];

const rootReducer = createResetMetaReducer(
  "GLOBAL_RESET",
  resetSlices
)(
  combineReducers({
   
    authinfo: authSlice,
    addtocard: AddToCard,
    
  })
);

const persistConfig = {
  key: "root",
  storage,
  whitelist: resetSlices,
};
export default persistReducer(persistConfig, rootReducer);
