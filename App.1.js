import { StatusBar } from "expo-status-bar";
import Routes from "./src/router";


export default function App() {
  return (
    <>
      <StatusBar style="linght" backgroundColor="#000" translucent={true} />
      <Routes />
    </>
  );
}
