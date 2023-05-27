import React from "react";

const Landing = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] p-10 bg-cover h-screen bg-no-repeat ">
      <div className="flex justify-around items-center py-10 mx-auto backdrop-blur-sm rounded-lg">
        <div className="w-1/2">
          <h1 className="text-white text-5xl font-bold text-center">Minting</h1>
          <p className="text-white font-semibold text-sm mt-3">
            Minting an NFT, or non-fungible token, is publishing a unique
            digital asset on a blockchain so that it can be bought, sold, and
            traded.
          </p>
          <h1 className="text-white text-5xl font-bold text-center mt-20">NFT</h1>
          <p className="text-white font-semibold text-sm mt-3">
            An NFT is a non-fungible token, which is a one-of-a-kind digital
            item. They're a unit of data stored on a blockchain that represents
            an underlying digital asset – such as art, music, videos,
            collectibles and in-game assets.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          className="h-80 w-80 rounded-md drop-shadow-md"
        />
      </div>
    </div>
  );
};

export default Landing;
