import React from "react";
import { Animate } from "react-simple-animate";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h1>Welcome to Korchinsky.com</h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1.3}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="contactme">
          <div className="contactme-buttons">
            <button>Contact Us</button>
            <a href="https://www.myheritage.com/site-171091212/korchinsky">MyHeritage</a>
          </div>
        </div>
      </Animate>
    </section>
  );
}
