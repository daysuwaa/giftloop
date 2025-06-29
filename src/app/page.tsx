import { Gift, Bell, Lightbulb, CalendarHeart, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="bg-[#fff8f3] text-gray-800 min-h-screen">
      {/* Header */}
      <header className="sticky top-0 bg-white/70 backdrop-blur-md z-50  px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Gift className="text-pink-500" size={28} />
          GiftLoop
        </h1>
        <nav className="space-x-6 text-sm items-center font-medium hidden md:flex">
          <a href="#features" className="hover:text-pink-500 transition">Features</a>
          <a href="#about" className="hover:text-pink-500 transition">About</a>
          <a href="/authentication/login" className="bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition">Get Started</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <Sparkles size={48} className="text-yellow-400 mb-4 animate-bounce" />
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Never forget a gift again.
        </h2>
        <p className="text-lg max-w-xl mb-6">
          GiftLoop helps you track gift ideas, remember special dates, and always stay thoughtful.
        </p>
        <a
          href="/authentication/login"
          className="bg-gradient-to-r from-pink-400 to-yellow-300 text-white font-semibold px-6 py-3 rounded-full text-lg hover:opacity-90 transition"
        >
          Try GiftLoop
        </a>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">What you can do with GiftLoop</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 rounded-lg shadow-md hover:shadow-xl transition bg-[#fff1f5]">
              <CalendarHeart size={36} className="text-pink-500 mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Track Important Dates</h4>
              <p>Keep birthdays, anniversaries, and special days organized in one place.</p>
            </div>
            <div className="p-6 rounded-lg shadow-md hover:shadow-xl transition bg-[#fffaf0]">
              <Lightbulb size={36} className="text-yellow-500 mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Save Gift Ideas</h4>
              <p>Store gift ideas the moment they pop into your head, no more forgetting.</p>
            </div>
            <div className="p-6 rounded-lg shadow-md hover:shadow-xl transition bg-[#f0f9ff]">
              <Bell size={36} className="text-blue-500 mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Set Reminders</h4>
              <p>Get notified ahead of time so you&apos;re never scrambling last-minute.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 text-center bg-[#fff8f3]">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Why GiftLoop?</h3>
          <p className="text-lg mb-6">
            Because thoughtful is better than expensive. Whether it’s a note, a gift card, or something personal — GiftLoop helps you be more intentional with the people you love.
          </p>
          <Sparkles size={32} className="text-yellow-400 mx-auto animate-pulse" />
        </div>
      </section>

      {/* Call to Action */}
      <section id="get-started" className="bg-pink-50 py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to be everyone&apos;s favorite person?</h3>
        <p className="mb-6 text-lg">Start tracking gifts and planning ahead with ease.</p>
        <a
          href="/authentication/login"
          className="bg-pink-500 w-full text-white font-semibold px-8 py-3 rounded-full text-lg hover:bg-pink-600 transition"
        >
          Create Your GiftLoop 
        </a>
      
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} GiftLoop. Built with love. 🎁
      </footer>
    </main>
  );
}