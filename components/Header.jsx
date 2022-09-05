import Image from "next/image";
import React from "react";
import logo from "../resources/logo.png";

const styles = {
  header: "bg-[#17171A] text-white h-20 flex gap-20 w-full p-4 relative",
  headerWrapper: "flex justify-center h-full max-w-screen-xl mx-auto px-4",
  nav: 'flex justify-center items-center gap-4',
  navItem: ''
};

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="absolute w-[140px] h-[120px] top-0 left-0 object-cover object-right">
        <Image
          src={logo}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles.headerWrapper}>
        <div className={styles.nav}>
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

          
        </div>
      </div>
    </div>
  );
};

export default Header;
