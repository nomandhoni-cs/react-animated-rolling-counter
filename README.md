# React Animated Rolling Counter

A lightweight, performant, and highly customizable animated counter component for React, perfect for displaying changing numbers with a smooth "slot machine" rolling effect.

![Demo GIF](https://your-gif-url.com/demo.gif) <!-- You would create a GIF and host it -->

## Features

-   **Smooth Animations:** Uses CSS transforms for high-performance animations.
-   **Highly Customizable:** Control font size, padding, and styling via props.
-   **Easy to Style:** Provides base structural CSS and allows for complete customization with your own class names (e.g., Tailwind CSS).
-   **Lightweight:** No external dependencies.
-   **TypeScript Ready:** Written in TypeScript with full type support.

## Installation

```bash
npm install react-animated-rolling-counter
# or
yarn add react-animated-rolling-counter
```

## Usage

First, import the required base styles once in your main application file (e.g., `App.tsx` or `index.css`).

```javascript
// In your App.tsx or similar entry file
import "react-animated-rolling-counter/styles.css";
```

Then, use the component in your project:

```tsx
import { useState } from "react";
import { AnimatedCounter } from "react-animated-rolling-counter";
import "react-animated-rolling-counter/styles.css";

const CounterDemo = () => {
  const [count, setCount] = useState(10);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "50px",
        fontFamily: "sans-serif",
        border: "1px solid #ddd",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "50px auto",
      }}
    >
      <h2 style={{ margin: 0 }}>Animated Counter Demo</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <button
          onClick={decrement}
          style={{ padding: "10px 20px", fontSize: "24px", cursor: "pointer" }}
        >
          -
        </button>
        <AnimatedCounter value={count} fontSize="60px" padStart={2} />
        <button
          onClick={increment}
          style={{ padding: "10px 20px", fontSize: "24px", cursor: "pointer" }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterDemo;

```

### Customization with Tailwind CSS

You can easily customize the counter using the `containerClassName` and `digitClassName` props.

```tsx
<AnimatedCounter
  value={score}
  fontSize={80}
  padding={4}
  containerClassName="gap-2"
  digitClassName="text-blue-500 bg-gray-800 rounded-lg"
/>
```

## Props API

| Prop                 | Type     | Default | Description                                                              |
| -------------------- | -------- | ------- | ------------------------------------------------------------------------ |
| `value`              | `number` | **-**   | **Required.** The numeric value to display.                              |
| `fontSize`           | `number` | `60`    | The font size in pixels. Also determines the height of the component.    |
| `padding`            | `number` | `2`     | The total number of digits, padding with leading zeros if needed.        |
| `containerClassName` | `string` | `""`    | Custom class for the main container `div`. Useful for `gap`, etc.        |
| `digitClassName`     | `string` | `""`    | Custom class for each digit slot. Useful for `color`, `bg`, `rounded`. |