import { useEffect } from "react";
import Alert from "./components/Alert";
import Artworks from "./components/Artworks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Loading from "./components/Loading";
import { isWallectConnected, loadNfts } from "./MintDapp";
import { useGlobalState } from "./store";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Landing from "./components/Landing";

function App() {
  const [nfts] = useGlobalState("nfts");

  useEffect(async () => {
    await isWallectConnected().then(() => console.log("Blockchain Loaded"));
    await loadNfts();
  }, []);

  return (
    <div className="min-h-screen ">
      <div className="gradient-bg-hero">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="main"
            element={
              <div>
                <Home />
                <Artworks artworks={nfts} />
              </div>
            }
          />
          <Route path="about" element={<AboutUs />} />
        </Routes>
      </div>

      <Footer />
      <Alert />
      <Loading />
    </div>
  );
}

export default App;
