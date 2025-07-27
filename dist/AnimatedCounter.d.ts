import { default as React } from 'react';
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
export declare const AnimatedCounter: React.FC<AnimatedCounterProps>;
export default AnimatedCounter;
