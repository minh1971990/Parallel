"use client";
import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import Image from "next/image";

const GameImageCarousel: React.FC = () => {
  const plugins = [];

  return (
    <div className="game-carousel-container">
      <Flicking
        circular={true}
        align="prev"
        moveType="snap"
        duration={500}
        plugins={plugins}
        onMove={(e) => console.log("Panel moved", e)}
        onWillChange={(e) => console.log("Panel will change", e)}
      >
        <div className="flicking-panel">
          <Image
            src="/game1.jpg"
            alt="Game 1"
            fill
            className="game-image"
          />
        </div>
        <div className="flicking-panel">
          <Image
            src="/game2.jpg"
            alt="Game 2"
            fill
            className="game-image"
          />
        </div>
        <div className="flicking-panel">
          <Image
            src="/game3.jpg"
            alt="Game 3"
            fill
            className="game-image"
          />
        </div>
        <div className="flicking-panel">
          <Image
            src="/game4.jpg"
            alt="Game 4"
            fill
            className="game-image"
          />
        </div>
      </Flicking>

      <style jsx>{`
        .game-carousel-container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          overflow: hidden;
          touch-action: pan-x;
        }

        .flicking-panel {
          user-select: none;
          -webkit-user-drag: none;
          touch-action: pan-x;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 400px;
          position: relative;
        }

        .game-image {
          object-fit: cover;
          border-radius: 8px;
          pointer-events: none; /* Allow pointer events to pass through the image */
        }
      `}</style>
    </div>
  );
};

export default GameImageCarousel;
