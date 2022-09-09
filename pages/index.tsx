import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Trending from "../components/Trending";
import Table from "../components/price-table/Table";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mt-10 mx-8">
        <Trending />
      </div>
      <div className="mt-20">
        <Table />
      </div>
    </div>
  );
};

export default Home;
