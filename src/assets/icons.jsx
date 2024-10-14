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

export const WhatsappIcon = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='21'
      viewBox='0 0 20 21'
      fill='inherit'
    >
      <path d='M18.3172 9.9768C18.0339 5.14346 13.6422 1.41847 8.5839 2.25181C5.10056 2.82681 2.3089 5.65179 1.76724 9.13512C1.45057 11.1518 1.86725 13.0601 2.77559 14.6351L2.03391 17.3935C1.86724 18.0185 2.44223 18.5851 3.05889 18.4101L5.77557 17.6601C7.0089 18.3851 8.45057 18.8018 9.99223 18.8018C14.6922 18.8018 18.5922 14.6601 18.3172 9.9768ZM14.0672 13.5685C13.9922 13.7185 13.9006 13.8601 13.7839 13.9935C13.5756 14.2185 13.3505 14.3851 13.1005 14.4851C12.8505 14.5935 12.5756 14.6435 12.2839 14.6435C11.8589 14.6435 11.4006 14.5435 10.9256 14.3351C10.4422 14.1268 9.96725 13.8518 9.49225 13.5101C9.00892 13.1601 8.55891 12.7685 8.12557 12.3435C7.69224 11.9101 7.30889 11.4518 6.95889 10.9768C6.61722 10.5018 6.34224 10.0268 6.14224 9.55179C5.94224 9.07679 5.84225 8.61847 5.84225 8.18514C5.84225 7.9018 5.89224 7.6268 5.99224 7.3768C6.09224 7.11847 6.25059 6.88514 6.47559 6.67681C6.74226 6.41014 7.0339 6.28514 7.34224 6.28514C7.4589 6.28514 7.57555 6.31013 7.68388 6.36013C7.79222 6.41013 7.89224 6.48513 7.96724 6.59347L8.93388 7.96012C9.00888 8.06845 9.06723 8.16013 9.10056 8.25179C9.14223 8.34346 9.1589 8.42679 9.1589 8.51012C9.1589 8.61012 9.12558 8.71014 9.06724 8.81014C9.00891 8.91014 8.93389 9.01012 8.83389 9.11012L8.51722 9.44345C8.46722 9.49345 8.45059 9.54346 8.45059 9.61013C8.45059 9.64346 8.45888 9.67679 8.46722 9.71013C8.48388 9.74346 8.49225 9.76846 8.50058 9.79346C8.57558 9.93513 8.70889 10.1101 8.89223 10.3268C9.08389 10.5435 9.28393 10.7685 9.50059 10.9851C9.72559 11.2101 9.94225 11.4101 10.1673 11.6018C10.3839 11.7851 10.5672 11.9101 10.7089 11.9851C10.7339 11.9935 10.7589 12.0101 10.7839 12.0184C10.8172 12.0351 10.8506 12.0351 10.8922 12.0351C10.9672 12.0351 11.0173 12.0101 11.0673 11.9601L11.3839 11.6435C11.4922 11.5351 11.5923 11.4601 11.6839 11.4101C11.7839 11.3518 11.8756 11.3185 11.9839 11.3185C12.0672 11.3185 12.1506 11.3351 12.2422 11.3768C12.3339 11.4185 12.4339 11.4685 12.5339 11.5435L13.9173 12.5268C14.0256 12.6018 14.1006 12.6935 14.1506 12.7935C14.1922 12.9018 14.2172 13.0018 14.2172 13.1185C14.1672 13.2601 14.1339 13.4185 14.0672 13.5685Z' />
    </svg>
  );
};

export const FacebookIcon = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='21'
      height='21'
      viewBox='0 0 21 21'
      fill='inherit'
    >
      <path d='M19.0423 14.0484C19.0423 17.1575 17.1888 19.0111 14.0796 19.0111H13.0632C12.5934 19.0111 12.209 18.6267 12.209 18.1569V13.2284C12.209 12.9977 12.3969 12.8013 12.6275 12.8013L14.1309 12.7757C14.2504 12.7671 14.3529 12.6817 14.3786 12.5621L14.6775 10.9307C14.7032 10.7769 14.5836 10.6317 14.4213 10.6317L12.6019 10.6573C12.3627 10.6573 12.1748 10.4694 12.1663 10.2388L12.1321 8.14607C12.1321 8.0094 12.2431 7.88983 12.3884 7.88983L14.4383 7.85565C14.5836 7.85565 14.6946 7.74462 14.6946 7.59941L14.6604 5.54939C14.6604 5.40418 14.5494 5.29315 14.4042 5.29315L12.0979 5.32733C10.68 5.35295 9.55254 6.51461 9.57816 7.93252L9.62086 10.2815C9.6294 10.5206 9.44149 10.7086 9.20233 10.7171L8.17732 10.7342C8.03211 10.7342 7.92108 10.8452 7.92108 10.9904L7.9467 12.6134C7.9467 12.7586 8.05773 12.8696 8.20294 12.8696L9.22795 12.8525C9.46712 12.8525 9.65502 13.0404 9.66356 13.2711L9.74043 18.1398C9.74897 18.6182 9.3646 19.0111 8.88626 19.0111H6.92169C3.81252 19.0111 1.95898 17.1575 1.95898 14.0398V6.89044C1.95898 3.78127 3.81252 1.92773 6.92169 1.92773H14.0796C17.1888 1.92773 19.0423 3.78127 19.0423 6.89044V14.0484V14.0484Z' />
    </svg>
  );
};
