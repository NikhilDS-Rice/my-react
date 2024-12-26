import Root from "./components/Theme"; //Light-Dark_Theme
import Giftcard from "./Giftcard/Giftcard";
import Fetchdata from "./Fetchdata/Fetchdata";
import Radiobuttons from "./Radiobuttons/Radiobuttons";

function App() {
  return (
  <>
    <Root /> 
    <Giftcard />
    <Fetchdata />
    <Radiobuttons />
  </>
      

  );
}

export default App;

import Root from "./components/Theme"; //Light-Dark_Theme
import Giftcard from "./Giftcard/Giftcard"; //Giftcard option
import Fetchdata from "./Fetchdata/Fetchdata"; //Fetching data from Random.me API
import Customhook from "./custom-hook/Custom-hook"; // Using custom-hooks

function App() {
  return (
  <>
    <Root /> 
    <Giftcard />
    <Fetchdata />
    <Customhook />
  </>
      

  );
}

export default App;
