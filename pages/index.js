import Head from 'next/head';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-4 font-playfair">
      <Head>
        <title>Web3 Profile Site</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Ledger&family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeToggle />
      <h1 className="text-4xl mb-4">Welcome to say ILY.art</h1>
            <p className="font-ledger mb-2">{"<3"}</p>
      <p className="font-instrument">It’s not another portfolio.</p>
  <p className="font-instrument">So slow down and breathe, feel the love.
</p>
      {/* Wallet connection and NFT embed components will go here */}
    </div>
  );
}
