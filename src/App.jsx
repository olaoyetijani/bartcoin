//import { React } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import TheBart from "./components/TheBart";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Howtobuy from "./components/Howtobuy";
import RoadMap from "./components/RoadMap";
import AnotherWay from "./components/AnotherWay";
import WhyChoose from "./components/WhyChoose";
import BartIsTheOne from "./components/BartIsTheOne";
import Hodl from "./components/Hodl";
import BeyondMemes from "./components/BeyondMemes";
import Footer from "./components/Footer";
import WalletContextProvider from "./components/WalletContextProvider";

function App() {
  return (
    <WalletContextProvider>
      <Header />
      <Banner />
      <TheBart />
      <About />
      <Tokenomics />
      <Howtobuy />
      <RoadMap />
      <AnotherWay />
      <WhyChoose />
      <BartIsTheOne />
      <Hodl />
      <BeyondMemes />
      <Footer />
    </WalletContextProvider>
  );
}

export default App;
