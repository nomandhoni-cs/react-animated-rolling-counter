import { default as React } from 'react';
interface AnimatedCounterProps {
    value: number;
    fontSize?: string;
    className?: string;
    digitClassName?: string;
    padStart?: number;
    separator?: string;
}
export declare const AnimatedCounter: React.FC<AnimatedCounterProps>;
export {};
