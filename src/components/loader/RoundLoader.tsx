import React from 'react';

//  By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL

export interface RoundLoaderProps {
  width?: string;
  height?: string;
  className?: string;
}

const RoundLoader = (props: RoundLoaderProps) => {
  const { width, height, className } = props;

  return (
    <svg width={width} height={height} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className={className}>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  );
};

RoundLoader.defaultProps = {
  width: '38px',
  height: '38px',
};

export default RoundLoader;
