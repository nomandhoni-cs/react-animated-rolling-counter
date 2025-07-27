import React from "react";
import "./styles.css"; // We'll create this file next

// --- Prop Types for the Component ---
// Defines the public API for our component, with JSDoc for great DX.
export interface AnimatedCounterProps {
  /** The numeric value to display. */
  value: number;
  /** The font size in pixels. This is used to calculate the digit height. */
  fontSize?: number;
  /**
   * The total number of digits to display, padding with leading zeros if necessary.
   * @default 2
   */
  padding?: number;
  /** Custom class for the main container div. */
  containerClassName?: string;
  /** Custom class for the individual digit slots. Use this to set width, color, etc. */
  digitClassName?: string;
}

// --- Internal Digit Component ---
// This is not exported, it's an implementation detail.
interface DigitProps {
  digit: number;
  height: number;
}

const Digit: React.FC<DigitProps> = ({ digit, height }) => {
  // A memoized array of digits 0-9 to avoid re-creation on every render.
  const allDigits = React.useMemo(
    () => Array.from({ length: 10 }, (_, i) => i),
    []
  );

  return (
    <div className="animated-counter-digit-slot" style={{ height }}>
      {/* 
        This is the "reel" that moves. The transform is what creates the animation.
        By changing the `digit` prop, this div slides to the new position.
      */}
      <div
        className="animated-counter-reel"
        style={{ transform: `translateY(-${digit * height}px)` }}
      >
        {allDigits.map((n) => (
          <div key={n} className="animated-counter-digit" style={{ height }}>
            {n}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- The Main Exportable Component ---
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  fontSize = 60, // A sensible default
  padding = 2,
  containerClassName = "",
  digitClassName = "",
}) => {
  // Ensure value is a valid number, default to 0 if not.
  const safeValue = isNaN(value) ? 0 : value;

  // Convert the number to a padded string and then split into an array of digits.
  const digits = String(safeValue).padStart(padding, "0").split("");

  return (
    <div
      className={`animated-counter-container ${containerClassName}`}
      style={{ fontSize: `${fontSize}px`, lineHeight: `${fontSize}px` }}
      aria-label={`Value: ${value}`} // Accessibility
    >
      {digits.map((d, index) => (
        <div
          // We provide a default scalable width, but it can be overridden.
          className={`animated-counter-digit-wrapper ${digitClassName}`}
          key={`${d}-${index}`}
        >
          <Digit digit={parseInt(d, 10)} height={fontSize} />
        </div>
      ))}
    </div>
  );
};

export default AnimatedCounter;
