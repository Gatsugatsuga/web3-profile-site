import Head from 'next/head';
import Image from 'next/image';

export default function TemporaryHome() {
  return (
    <>
      <Head>
        <title>SayILY.art</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Instrument+Serif&family=Ledger&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center text-center bg-white text-gray-900 px-4 py-12 font-serif">
        {/* Hero */}
        <div className="mb-12">
          <Image src="/Logo_Final_almostperfectlytransparent.png" alt="SayILY Logo" width={160} height={160} />
         import Head from 'next/head';

export default function SayILYIntro() {
  return (
    <>
      <Head>
        <title>SayILY.art</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Instrument+Serif&family=Ledger&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-white text-gray-900 px-6 py-12 text-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            What is SayILY.art?
          </h1>
          <p className="text-lg" style={{ fontFamily: "'Ledger', serif" }}>
            Raw and a little chaotic — beautifully so, SayILY.art is a space to spotlight your creativity, uplift your fellow artists, and reconnect with the pieces you’ve lovingly collected.
          </p>
          <p className="text-lg" style={{ fontFamily: "'Ledger', serif" }}>
            Slow down, feel the love, and share the magic.
          </p>
          <p className="text-lg" style={{ fontFamily: "'Ledger', serif" }}>
            Rediscover the art that moved you — across chains, across time.
            <br />
            Feel that first spark again.
          </p>
          <p className="text-lg" style={{ fontFamily: "'Ledger', serif" }}>
            Celebrate the creativity that brought you here. One piece at a time.
          </p>
          <p className="text-xl font-semibold" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Say ILY &lt;3
            <br />
            ILY, say it back!
          </p>

        {/* Footer / CTA */}
        <footer className="mt-12 text-center space-y-4">
          <h4 className="text-xl font-semibold mb-2">ILY, say it back!</h4>
         

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf_3GHSAizqI5-qK2EoyW7mNNm_z39Bec1aDu_qCiUIOcDGmw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Join the Waitlist!
            </a>
        
          </div>
        </footer>
      </main>
    </>
  );
}
