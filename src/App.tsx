import React, { useEffect, useState } from 'react';
import { Copy, ExternalLink, Download, Coins, ArrowRightLeft, Twitter } from 'lucide-react';

function App() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  
  const contractAddress = "TBA";

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono">

      {/* Sticky Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-sm border-b-2 border-purple-600 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex justify-center space-x-8 flex-1">
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-black hover:text-purple-600 font-bold transition-colors duration-200"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('how-to-buy')}
                className="text-black hover:text-purple-600 font-bold transition-colors duration-200"
              >
                How to Buy
              </button>
            </div>
            <a
              href="https://x.com/purpisrich"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Contract Address */}
        <div className="flex justify-center mb-8">
          <div className="bg-purple-100 border-2 border-purple-600 rounded-full px-6 py-3 flex items-center space-x-3">
            <span className="text-sm font-mono text-purple-800">
              CA: {contractAddress}
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-8xl font-black text-purple-600 mb-4 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            $purp
          </h1>
          <p className="text-2xl text-black font-bold transform rotate-1">
            life of a brokie to rich
          </p>
        </div>

        {/* Character Space - Placeholder for your images */}
        <div className="flex justify-center mb-12">
          <div className="w-80 h-80 flex items-center justify-center animate-bounce">
            <img 
              src="src/assets/New Project (71).png" 
              alt="Purp Character" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Twitter Embed Placeholder */}
        <div className="max-w-md mx-auto">
          <blockquote className="twitter-tweet" data-theme="light">
            <a href="https://x.com/purpisrich/status/1963262751997936028"></a>
          </blockquote>
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-black text-center mb-12 transform -rotate-1">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square bg-purple-100 border-4 border-dashed border-purple-400 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              {i === 1 ? (
                <img 
                  src="src/assets/gfhfi copy copy copy copy.png" 
                  alt="Purp Character" 
                  className="w-full h-full object-contain p-2"
                />
              ) : i === 2 ? (
                <img 
                  src="src/assets/photo_5317024523398281869_y copy copy.jpg" 
                  alt="Purp Character" 
                  className="w-full h-full object-contain p-2"
                />
              ) : i === 3 ? (
                <img 
                  src="src/assets/389.png" 
                  alt="Purp Character" 
                  className="w-full h-full object-contain p-2"
                />
              ) : (
                <img 
                  src="src/assets/jgifj copy copy.png" 
                  alt="Purp Character" 
                  className="w-full h-full object-contain p-2"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="how-to-buy" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-black text-center mb-12 transform -rotate-1">
          How to Buy
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-purple-100 border-4 border-purple-600 rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300 transform rotate-1 hover:rotate-0">
            <div className="mb-4">
              <Download className="text-purple-600 mx-auto mb-2" size={32} />
              <h3 className="text-xl font-bold text-purple-800">Step 1</h3>
            </div>
            <p className="text-purple-700 font-bold mb-4">Download Phantom wallet</p>
            <div className="bg-white rounded-full p-3 inline-block">
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-blue-100 border-4 border-blue-600 rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300 transform -rotate-1 hover:rotate-0">
            <div className="mb-4">
              <Coins className="text-blue-600 mx-auto mb-2" size={32} />
              <h3 className="text-xl font-bold text-blue-800">Step 2</h3>
            </div>
            <p className="text-blue-700 font-bold mb-4">Fund with Solana</p>
            <div className="bg-white rounded-full p-3 inline-block">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-green-100 border-4 border-green-600 rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300 transform rotate-1 hover:rotate-0">
            <div className="mb-4">
              <ArrowRightLeft className="text-green-600 mx-auto mb-2" size={32} />
              <h3 className="text-xl font-bold text-green-800">Step 3</h3>
            </div>
            <p className="text-green-700 font-bold mb-4">Swap SOL for $purp</p>
            <div className="flex justify-center space-x-2">
              <div className="bg-white rounded-full p-2">
                <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
              </div>
              <div className="bg-white rounded-full p-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-xs text-green-600 mt-2">Raydium or Jupiter</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-600 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-black mb-4">$purp</h3>
          <p className="text-purple-200">life of a brokie to rich</p>
          <p className="mt-4 text-sm text-purple-300">Contract: TBA</p>
        </div>
      </footer>
    </div>
  );
}

export default App;