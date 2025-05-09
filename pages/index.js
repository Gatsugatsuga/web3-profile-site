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
          <Image src="/Logo_Final.png" alt="SayILY Logo" width={160} height={160} />
          <h1 className="text-4xl md:text-5xl font-bold mt-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            SayILY.art
          </h1>
          <p className="text-lg text-gray-700 mt-4 italic" style={{ fontFamily: "'Ledger', serif" }}>
            Raw and a little chaotic — beautifully so.
          </p>
        </div>

        {/* Middle Section */}
        <section className="max-w-2xl text-lg leading-relaxed space-y-6">
          <h2 className="text-2xl font-semibold" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Not a pristine gallery.
            <br />
            A treasure chest—holding just 5 pieces at a time.
          </h2>
          <h3 className="text-md italic text-gray-600" style={{ fontFamily: "'Ledger', serif" }}>
            A decentralized, DIY-style hub for artists and art lovers.
          </h3>
          <p>
            Say ILY.art is a space to spotlight your work, uplift your fellow artists, and reconnect with the pieces you’ve lovingly collected.
          </p>
          <p>
            Rediscover the art that moved you—across chains, across time. Feel that first spark again.
          </p>
          <p>
            Celebrate the creativity that brought you here.
            <br />
            Slow down, feel the love and share the magic.
            <br />
            One piece at a time.
          </p>
          <p className="font-semibold">
            Keep it genuine. Keep it weird.
            <br />
            Say ILY &lt;3
          </p>
        </section>

        {/* Footer / CTA */}
        <footer className="mt-12">
          <h4 className="text-xl font-semibold mb-4">ILY, say it back!</h4>
          Join the waitlist!
<a href="https://docs.google.com/forms/d/e/1FAIpQLSf_3GHSAizqI5-qK2EoyW7mNNm_z39Bec1aDu_qCiUIOcDGmw/viewform?embedded=true" target="_blank">Subscribe to our newsletter</a>
Subscribe to our newsletter
<a href="https://docs.google.com/forms/d/e/1FAIpQLSf6dZRkf8gVIX_i9K8kbXZGlah9Dq3ReQisEtDpDnz5jYHPcQ/viewform?embedded=true" target="_blank">Subscribe to our newsletter</a>

          <button c
