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
        <ScrollAnimation
        className="text-white"
          image={organic}
          title="Purely Organic."
          backgroundColor="#008C45"
          content={
            <p className="text-xl text-center">
              All our ingredients are 100% organic and grown in our own farms.
              This ensures great nutritional value and freshness.
            </p>
          }
        />
      </div>

      <div className="snap-start">
        <ScrollAnimation
          className="text-black"
          backgroundColor="#F4F9FF"
          left
          image={spaghettiBowl}
          title="Real Italian Craftsmanship."
          content={
            <p className="text-xl text-black text-center">
              We use only the finest ingredients to make our spaghetti. Our
              chefs are trained in the art of perfection.
            </p>
          }
        />
      </div>
      <div className="snap-start">
        <ScrollAnimation
          className="text-white"
          backgroundColor="#CD212A"
          image={delivery}
          title="Freshly delivered straight to your front door."
          content={
            <div className=" flex flex-wrap gap-4 text-xl justify-center w-full text-white">
              We have a network of dedicated{" "}
              <RandomBlinkingText
                text=" employees "
                alternateTexts={[
                  " cult members ",
                  " robots ",
                  " aliens ",
                  " cryptids ",
                  " skinwalkers ",
                  " vampires ",
                  " werewolves ",
                  " zombies ",
                  " ghosts ",
                  " demons ",
                  " angels ",
                  " time travelers ",
                ]}
                blinkDuration={250}
                minInterval={5000}
                maxInterval={10000}
              />{" "}
              who deliver our spaghetti to your doorstep.
            </div>
          }
        />
      </div>

      <div className="snap-start">
        <Section title="Get it!">
          <div className="text-5xl mt-4 flex gap-4 ">
            <RandomBlinkingText
              text="Soon"
              alternateTexts={["Never"]}
              blinkDuration={250}
              minInterval={5000}
              maxInterval={10000}
            />{" "}
            delivering to your area!
          </div>
        </Section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
