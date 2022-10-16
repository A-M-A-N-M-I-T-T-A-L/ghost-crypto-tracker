import { useRouter } from "next/router";
import { useContext } from "react";
import Header from "../../components/Header";
import solana from "../../resources/solana.png";
import usdc from "../../resources/usdc.png";
import { CoinMarketContext } from "../../context/context";
import PriceConverter from "../../components/coin-info/PriceConverter";
import Graph from "../../components/coin-info/Graph";
import Chat from '../../components/coin-info/Chat';

const styles = {
  activeTab: "p-1 px-2 mr-2 rounded-lg bg-[#171924]",
  tabItem: "px-2",
  tabContainer:
    "flex items-center p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-sm",
  info: "min-h-screen min-w-full",
  flexStart: "flex items-start",
  flexBetween: "flex justify-between",
  flexBetweenCenter: "flex items-center justify-between",
  tabContainerWrapper: "p-10 pl-0 pr-0 w-2/3",
  flexCenter: "flex items-center",
  main: 'w-[95%] mx-auto text-white'
};

const info = () => {
  // const [coinName, setCoinName] = useState('')
  // const [coinSymbol, setCoinSymbol] = useState('')
  // const [coinPrice, setCoinPrice] = useState('')

  // const router = useRouter();
  const { coinData } = useContext(CoinMarketContext);

  //   useEffect(() => {
  //     console.log(coinData);
  //   }, []);

  return (
    <div className={styles.info}>
      <Header />
      <main className={styles.main}>
        <div className={styles.flexStart}>
          <div className={styles.tabContainerWrapper}>
            <div className={styles.flexBetween}>
              <div className={styles.tabContainer}>
                <p className={styles.activeTab}>Price</p>
                <p className={styles.tabItem}>Market Cap</p>
                <p className={styles.tabItem}>Trading View</p>
                <p className={styles.tabItem}>History</p>
              </div>

              <div className={styles.tabContainer}>
                <p className={styles.activeTab}>1D</p>
                <p className={styles.tabItem}>2D</p>
                <p className={styles.tabItem}>1M</p>
                <p className={styles.tabItem}>3M</p>
                <p className={styles.tabItem}>1Y</p>
                <p className={styles.tabItem}>YTD</p>
                <p className={styles.tabItem}>ALL</p>
                <p className={styles.tabItem}>LOG</p>
              </div>
            </div>

            <br />
            <Graph/>
            <br />

            <div className={styles.flexBetweenCenter}>
              <div className="flex">
                <div className={styles.flexCenter}>
                  <input type="checkbox" className=" outline-none" /> &nbsp; USD
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className={styles.flexCenter}>
                  <input type="checkbox" className=" outline-none" /> &nbsp; BTC
                </div>
              </div>
            </div>

            <br />
            <br />

            <PriceConverter />
          </div>

          <div className="pt-10 ml-5"><Chat /></div>
        </div>
      </main>
    </div>
  );
};

export default info;
