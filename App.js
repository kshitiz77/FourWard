import React, { useEffect } from "react";
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Routes from "./src/navigation/Routes";
import actions from "./src/redux/actions";
import store from "./src/redux/store";
import { getItem, getUserData } from "./src/utils/utils";
const App = () => {
  
  useEffect(() => {
    getItem("appIntroData").then((res) => {
      console.log("intro data", res);
      if (res != null) {
        actions.intro(res);
      }
    });

    getUserData("userData").then((res) => {
      console.log("store data app ", res);
      actions.saveUserData(res)
    });
  }, []);
  return (
    <>
      <SafeAreaProvider>
      <FlashMessage position="top" />
        <Provider store={store}>
          <Routes />
        </Provider>

      </SafeAreaProvider>
    </>
  );
};

export default App;
