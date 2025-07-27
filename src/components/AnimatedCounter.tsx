import React from 'react';
import '../styles/counter.css';

interface DigitProps {
  digit: number;
  height: number;
  className?: string;
}

const Digit: React.FC<DigitProps> = ({ digit, height, className = '' }) => {
  return (
    <div className={`digit-container ${className}`} style={{ height }}>
      <div 
        className="digit-slider"
        style={{
          transform: `translateY(-${digit * height}px)`
        }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <div 
            key={i} 
            className="digit"
            style={{ height }}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};

interface AnimatedCounterProps {
  value: number;
  fontSize?: string;
  className?: string;
  digitClassName?: string;
  padStart?: number;
  separator?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  fontSize = '60px',
  className = '',
  digitClassName = '',
  padStart = 2,
  separator = ''
}) => {
  const digitHeight = parseInt(fontSize);
  const digits = String(value).padStart(padStart, '0').split('');

  return (
    <div 
      className={`counter-container ${className}`}
      style={{ fontSize, lineHeight: `${digitHeight}px` }}
    >
      {digits.map((d, index) => (
        <React.Fragment key={index}>
          <div className="digit-wrapper">
            <Digit 
              digit={parseInt(d)} 
              height={digitHeight}
              className={digitClassName} 
            />
          </div>
          {separator && index < digits.length - 1 && (
            <span className="separator">{separator}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};