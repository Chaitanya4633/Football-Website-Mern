import { useRef } from "react";

function Scroll() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="matches-container">
      <h4>Matches for You</h4>
      <button onClick={scrollLeft}>⬅</button>
      <div className="scroll-container" ref={scrollRef}>
        {/* Add match cards here */}
      </div>
      <button onClick={scrollRight}>➡</button>
    </div>
  );
}

export default Scroll;