import Root from "./components/Theme"; //Light-Dark_Theme
import Giftcard from "./Giftcard/Giftcard"; //Giftcard option
import Fetchdata from "./Fetchdata/Fetchdata"; //Fetching data from Random.me API
import Customhook from "./custom-hook/Custom-hook"; // Using custom-hooks
import Radiobuttons from "./Radiobuttons/Radiobuttons"; //Using reactclone-components
import Hoc from "./Hoc/Hoc"; //for mouse positions

function App() {
  return (
  <>
    <Root /> 
    <Giftcard />
    <Fetchdata />
    <Customhook />
    <Radiobuttons />
    <Hoc />
  </>
      

  );
}

export default App;
