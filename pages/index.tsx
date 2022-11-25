import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BrowseByCategory from "../components/Home/BrowseByCategory";
import Hero from "../components/Home/Hero";
import HotCollections from "../components/Home/HotCollections";
import Intro from "../components/Home/Intro";
import NewItems from "../components/Home/NewItems";
import TopSeller from "../components/Home/TopSeller";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <HotCollections />
      <Intro />
      <NewItems />
      <TopSeller />
      <BrowseByCategory />
    </div>
  );
};

export default Home;
