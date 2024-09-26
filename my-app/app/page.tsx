import Head from 'next/head';
import Chatbot from './components/chatbotBox';
import Footer from './components/footer';
import Contact from './components/contact';
import Services from './components/services'

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden justify-center items-center gap-16">
      <Head>
        <title>AI Chatbot</title>
        <meta name="description" content="Generated description for AI Chatbot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <header className="flex w-full p-6 top-0 justify-between items-center flex-wrap">
        <div>
          <h1 className="text-3xl font-bold text-blue-600">LOGO</h1>
        </div>

        <nav className="text-white flex flex-wrap text-lg gap-4 md:gap-6">
          <div className=" cursor-pointer">ABOUT US</div>
          <div className=" cursor-pointer">SERVICES</div>
          <div className="cursor-pointer">CONTACT</div>
          <div className=" cursor-pointer"><a href="#more">MORE</a></div>
        </nav>

        <div className="mt-4 md:mt-0">
          <button className="rounded-full px-4 py-1 text-lg md:text-xl bg-blue-200 hover:bg-blue-700 hover:text-white text-blue-800">
            Sign in
          </button>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center  text-center justify-center w-full h-full px-4 py-16">
        <div className="max-w-screen-xl w-full gap-2 flex flex-col">
          {/* Title */}
          <h1 className="text-4xl md:text-7xl font-bold text-white">
            Empower Your Studies with <br /> AI Chatbot
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-100 mt-4">
            Get instant answers and personalized study recommendations with our AI-powered research and study chatbot.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 text-center justify-center items-center mt-4">
            <button className="bg-blue-200 hover:bg-blue-700 hover:text-white text-blue-800 font-bold py-2 px-4 rounded-full">
              Learn More
            </button>
            <button className="bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full">
              Sign Up
            </button>
          </div>

          <Chatbot />
        </div>
      </main>
      <Services/>
      <Contact />
      <Footer />
    </div>
  );
}
