import React from "react";
import Header from '../../components/Header'

import Selleroc from "../../components/Seller/Sellerorder/Selleroc"
export default function Sellerorderhistory() {
  return (
    <div className=" flex-1">
      <Header/>
      <div className="main flex">

        <Selleroc/>
      </div>
    </div>
  );
}
