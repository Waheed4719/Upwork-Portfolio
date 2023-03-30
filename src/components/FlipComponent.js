import { useState } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

// Make sure to register the CSSPlugin with GSAP
gsap.registerPlugin(CSSPlugin);

const FlipComponent = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
    { id: 4, text: "Item 4" },
    { id: 5, text: "Item 5" },
    { id: 6, text: "Item 6" },
    { id: 7, text: "Item 7" },
    { id: 8, text: "Item 8" },
  ]);

  const handleSwap = (e) => {
    const clickedIndex = e.currentTarget.dataset.index;
    const clickedItem = items[clickedIndex];

    // Check if the clicked item is already the first item
    if (clickedIndex === 0) {
      return;
    }

    // Move the clicked item to the first position
    setItems((prevItems) => [
      clickedItem,
      ...prevItems.slice(0, clickedIndex),
      ...prevItems.slice(clickedIndex + 1),
    ]);

    // Animate the swap using GSAP
    const currentItem = e.currentTarget;
    gsap.fromTo(
      currentItem,
      { opacity: 1, scale: 1 },
      {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.25,
        onComplete: () => {
          currentItem.style.opacity = "1";
          gsap.fromTo(
            currentItem,
            { opacity: 0, scale: 1.5 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
          );
        },
      }
    );
  };

  return (
    <div className="grid-container">
      {items.map((item, index) => (
        <div
          className="grid-item"
          key={item.id}
          data-index={index}
          onClick={handleSwap}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default FlipComponent;
