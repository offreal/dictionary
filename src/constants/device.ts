type TSize = {
  [key: string]: number
}

const size: TSize = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
}

const device = {
  desktopL: `(max-width: ${size.desktop}px)`,
  desktop: `(max-width: ${size.desktop}px)`,
  laptopL: `(max-width: ${size.laptopL}px)`,
  laptop: `(max-width: ${size.laptop}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  mobileL: `(max-width: ${size.mobileL}px)`,
  mobileM: `(max-width: ${size.mobileM}px)`,
  mobileS: `(max-width: ${size.mobileS}px)`,
}

export default device
