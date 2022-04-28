import { View, Text, SafeAreaView } from "react-native";
import React, {useEffect} from "react";
import Routes from "./src/navigation/Routes";
// import WrapperContainer from './src/Components/WrapperContainer'
import { getUserData } from "./src/utils/utils";
import actions from "./src/redux/actions";
import store from "./src/redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from 'react-redux'
const App = () => {

  useEffect(() => {
    getUserData().then((res) => {
      console.log("store data", res)
      if(!!res){
        actions.saveUserData(res)
      }
    })
  }, [])
  return (
    <>
    <SafeAreaProvider>
      <Provider store={store}>
      <Routes />
      </Provider>
    </SafeAreaProvider>
    </>
  );
};

export default App;
