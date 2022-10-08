import Head from "next/head"
/* import Header from "../components/ManualHeader" */
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>SmartCon Raffle</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*  */}
            <Header />
            <LotteryEntrance />
        </div>
    )
}
