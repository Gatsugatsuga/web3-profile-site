export default function SayILYHomePage() {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-pink-50">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Slow down, feel the love and share the magic.
          <br />
          <span className="text-pink-600">Keep it genuine. Keep it weird.</span>
          <br />
          <span className="text-purple-500">Say ILY &lt;3</span>
        </h1>
        <p className="mt-6 text-lg text-gray-700 italic">
          Raw and a little chaotic — beautifully so.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-xl font-semibold shadow-md">
            Create your space
          </button>
          <button className="border border-gray-400 text-gray-800 px-6 py-2 rounded-xl font-semibold hover:bg-gray-100">
            Meet the artists
          </button>
        </div>
      </section>

      {/* Middle Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Not a pristine gallery.
          <br />
          More like a treasure chest, holding only 5 pieces at a time.
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed">
          A decentralized, DIY-style hub for artists and art lovers.
          <br /><br />
          SayILY.art is a place to promote your work, your friend’s work — and to reconnect with the pieces you’ve curated.
          <br /><br />
          Rediscover the gems you’ve been collecting over the years across various chains.
          Feel the tingles that made you collect them in the first place.
          <br /><br />
          Share your love for your fellow artists.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h3 className="text-2xl font-semibold mb-8">Features</h3>
        <ul className="max-w-xl mx-auto space-y-4 text-lg text-gray-800">
          <li>🔐 Log in with your Web3 wallet, email, or Farcaster account</li>
          <li>🖼️ Customizable galleries</li>
          <li>🚫 No likes, no ranking — just presence</li>
          <li>🎨 Curated by artists, for artists (and art lovers)</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-pink-100 text-center">
        <h4 className="text-3xl font-bold mb-6">ILY, say it back!</h4>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-xl font-semibold shadow-md">
            Create your space
          </button>
          <button className="border border-gray-400 text-gray-800 px-6 py-2 rounded-xl font-semibold hover:bg-gray-100">
            About us
          </button>
        </div>
      </footer>
    </div>
  );
}
