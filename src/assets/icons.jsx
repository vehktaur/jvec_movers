export const ArrowDownIcon = (props) => {
  return (
    <svg
      {...props}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      stroke='#6F7173'
    >
      <g id='vuesax/linear/arrow-down'>
        <g id='arrow-down'>
          <path
            id='Vector'
            d='M3.39961 7.45703L8.83294 12.8904C9.47461 13.532 10.5246 13.532 11.1663 12.8904L16.5996 7.45703'
            strokeWidth='1.25'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
    </svg>
  );
};

export const HamburgerIcon = ({ menuOpen }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='30'
      viewBox='0 0 100 100'
      fill='white'
    >
      <rect
        className={`transition-hamburger-close ${menuOpen ? 'transition-hamburger-open [rotate:45deg] [y:45]' : ''} `}
        height={12}
        width={90}
        x={5}
        y={20}
        rx={5}
      />
      <rect
        className={`transition-hamburger-close ${menuOpen ? 'transition-hamburger-open opacity-0' : ''} `}
        height={12}
        width={90}
        x={5}
        y={50}
        rx={5}
      />
      <rect
        className={`transition-hamburger-close ${menuOpen ? 'transition-hamburger-open [rotate:-45deg] [y:45]' : ''} `}
        height={12}
        width={90}
        x={5}
        y={80}
        rx={5}
      />
    </svg>
  );
};
