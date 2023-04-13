import { useEffect } from "react";
import Alert from "./components/Alert";
import Artworks from "./components/Artworks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Loading from "./components/Loading";
import { isWallectConnected, loadNfts } from "./MintDapp";
import { useGlobalState } from "./store";

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
        <Home />
      </div>
      <Artworks artworks={nfts} />
      <Footer />
      <Alert />
      <Loading />
    </div>
  );
}

export default App;
