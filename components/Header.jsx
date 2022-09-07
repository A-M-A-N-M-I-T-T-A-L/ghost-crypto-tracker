import Image from "next/image";
import React from "react";
import logo from "../resources/logo.png";
import Search from '../resources/svg/search'
import { ConnectButton } from "web3uikit";

const styles = {
  header: "bg-[#17171A] text-white h-20 flex gap-20 min-w-max p-4 relative",
  headerWrapper: "ml-28 flex justify-center h-full max-w-screen-xl mx-auto px-4",
  nav: 'flex justify-center items-center gap-4',
  navLink: 'text-white flex mx-[10px]',
  navItem: 'relative mr-1 cursor-pointer hover:opacity-60',
  badge: 'rounded-full bg-blue-400 h-1 w-1 absolute -right-1 top-0.5 ring-4',
  inputContainer: 'flex items-center justify-center p-2 rounded bg-[#171924] mx-3',
  input : 'bg-transparent outline-none text-white w-70 ml-3',
};

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="w-10 h-10 absolute top-0 -left-1">
        <Image
          src={logo}
          objectFit="cover"
          layout="fixed"
          width={120}
          height={80}
        />
      </div>

      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
            <div className={styles.navItem}>
                <div className={styles.navLink}>
                    Cryptocurrencies
                </div>
                <div className={styles.badge} />
            </div>

            <div className={styles.navItem}>
                <div className={styles.navLink}>
                    Exchanges
                </div>
                
            </div>


            <div className={styles.navItem}>
                <div className={styles.navLink}>
                    NFT
                </div>
                <div className={styles.badge} />
            </div>

            <div className={styles.navItem}>
                <div className={styles.navLink}>
                    Cryptotown
                </div>
                <div className={styles.badge} />
            </div>

            <div className={styles.navItem}>
                <div className={styles.navLink}>
                    Portfolio
                </div>
                
            </div>

            <div className={styles.navItem}>
                <div className={styles.navLink}>
                    Watchlist
                </div>
                
            </div>

            <div className={styles.navItem}>
                <div className={styles.navLink}>
                    Products
                </div>
                <div className={styles.badge} />
            </div>

            <div className={styles.navItem}>
                <div className={styles.navLink}>
                    Learn
                </div>
            </div>

          
        </nav>

        <div className="flex items-center">
           
           <ConnectButton />
            <div className={styles.inputContainer}>
                <Search/>
                <input type="text" className={styles.input} placeholder="Search" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
