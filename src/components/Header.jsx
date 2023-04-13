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
        <li className="mx-4 cursor-pointer">Explore</li>
        <li className="mx-4 cursor-pointer">Features</li>
        <li className="mx-4 cursor-pointer">Community</li>
      </ul>
      {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-white 
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
        rounded-full cursor-pointer"
        >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          className="shadow-xl shadow-black text-white 
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
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
