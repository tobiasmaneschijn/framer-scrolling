import "./App.css";
import { ScrollAnimation } from "./components/ScrollAnimation";
import spaghettiBowl from "./assets/spaghetti-tomatoes.jpg";
import spaghetti1 from "./assets/spaghetti-1.png";
import spaghetti2 from "./assets/spaghetti-2.png";
import hero from "./assets/hero.jpg";
import organic from "./assets/organic.jpg";
import delivery from "./assets/delivery.jpg";

import Hero from "./components/Hero";
import Section from "./components/Section";
import { RandomBlinkingText } from "./components/BlinkingText";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white ">
        <div className="snap-start">
          <Hero
            title="Welcome to Spaghettony's"
            content="Savor the Taste of Authentic Italian Spaghetti!"
            image={hero}
          />
        </div>

        <div className="snap-start">
          <ScrollAnimation image={organic} title="Purely Organic." backgroundColor="#008C45" />
        </div>

        <div className="snap-start">
          <ScrollAnimation
          backgroundColor="#F4F9FF" 
            left
            image={spaghettiBowl}
            title="Real Italian Craftsmanship."
          />
        </div>
        <div className="snap-start">
          <ScrollAnimation
          backgroundColor="#CD212A" 
            image={delivery}
            title="Freshly delivered straight to your front door."
          />
        </div>

        <div className="snap-start">
          <Section title="Get it!">
          <div className="text-5xl mt-4 flex gap-4 "><RandomBlinkingText text="Soon" alternateTexts={[
            "Never",
          ]} blinkDuration={250} /> delivering to your area!</div>
          </Section>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
