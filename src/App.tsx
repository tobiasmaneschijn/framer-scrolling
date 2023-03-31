import "./App.css";
import { ScrollAnimation } from "./components/ScrollAnimation";
import spaghettiBowl from "./assets/spaghetti-bowl.png";
import spaghetti1 from "./assets/spaghetti-1.png";
import spaghetti2 from "./assets/spaghetti-2.png";

import Hero from "./components/Hero";
function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Hero
        title="
     I am Spaghetti
    "
        image={undefined}
      />
      <ScrollAnimation image={spaghettiBowl} title="We are the Spagghetti" />
      <ScrollAnimation left image={spaghetti1} title="You are the Spaghetti" />
      <ScrollAnimation image={spaghetti2} title="Embrace Spaghetti" />
    </div>
  );
}

export default App;
