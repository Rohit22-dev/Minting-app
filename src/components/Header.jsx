import { Link } from "react-router-dom";
import ethlogo from "../assets/ethlogo.png";
import { connectWallet } from "../MintDapp";
import { truncate, useGlobalState } from "../store";

const Header = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");
  return (
    <div className="w-4/5 flex justify-between md:justify-center items-center py-4 mx-auto">
      <div className="flex flex-row justify-start items-center md:flex-[0.5] flex-initial">
        <img src={ethlogo} alt="logo" className="w-8 cursor-pointer" />
        <span className="text-white text-2xlml-2">MintDapp</span>
      </div>

      <ul className="md:flex-[0.5] md:flex text-white hidden list-none flex-row justify-between items-center flex-initial">
        <Link to="/" className="mx-4 cursor-pointer">
          Home
        </Link>
        <Link to="main" className="mx-4 cursor-pointer">
          Minting
        </Link>{" "}
        <Link to="about" className="mx-4 cursor-pointer">
          About Us
        </Link>
      </ul>
      {connectedAccount ? (
        <button
          className="shadow-md shadow-black text-white 
          bg-[#f77a06] hover:bg-[#f73603] md:text-xs p-2
        rounded-full cursor-pointer mx-20"
        >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          className="shadow-md shadow-black text-white 
          bg-[#03b3f0] hover:bg-[#02a8e3] md:text-xs p-2
        rounded-full cursor-pointer"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Header;
