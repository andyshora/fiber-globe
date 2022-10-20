import { css } from "styled-components"

import {
  ScreenRotation as ScreenRotationIcon,
  PhonelinkErase as PhonelinkEraseIcon,
  Language as LanguageIcon
} from "@mui/icons-material"

import { useTheme } from "@mui/material"

// these media queries work by enabling the warning by matching a media query
// for more custom browser targetting:
// https://www.ryadel.com/en/css3-media-query-target-only-ie-ie6-ie11-firefox-chrome-safari-edge/#Internet_Explorer

export const ie10PlusWarningMediaQuery = css`
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    display: flex;
  }
`

export const ie9PlusWarningMediaQuery = css`
  @media screen and (min-width: 0) and (min-resolution: +72dpi) {
    display: flex;
  }
`

export const portraitWarningMediaQuery = css`
  @media (orientation: portrait) {
    display: flex;
  }
`

export const iPhoneWarningMediaQuery = css`
  /* ----------- iPhone 4 and 4S ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    display: flex;
  }

  /* Portrait */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    display: flex;
  }

  /* Landscape */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    display: flex;
  }

  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
    display: flex;
  }

  /* Portrait */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    display: flex;
  }

  /* Landscape */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    display: flex;
  }

  /* ----------- iPhone 6, 6S, 7 and 8 ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    display: flex;
  }

  /* Portrait */
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    display: flex;
  }

  /* Landscape */
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    display: flex;
  }

  /* ----------- iPhone 6+, 7+ and 8+ ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
    display: flex;
  }

  /* Portrait */
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
    display: flex;
  }

  /* Landscape */
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
    display: flex;
  }

  /* ----------- iPhone X ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    display: flex;
  }

  /* Portrait */
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
    display: flex;
  }

  /* Landscape */
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
    display: flex;
  }
`

export const Warning = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${({ palette }) => palette.background.default};
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 20;

  > div {
    max-width: 80%;
    text-align: center;

    > h3 {
      color: ${({ palette }) => palette.primary.light || "inherit"};
    }
  }
`

const StyledOrientationWarning = styled(Warning)`
  ${portraitWarningMediaQuery}
`
const StyledIPhoneWarning = styled(Warning)`
  ${iPhoneWarningMediaQuery}
`

const StyledIE10PlusBrowserWarning = styled(Warning)`
  ${ie10PlusWarningMediaQuery}
`

const StyledIE9PlusBrowserWarning = styled(Warning)`
  ${ie9PlusWarningMediaQuery}
`

export const IE10PlusBrowserWarning = ({
  iconSize = 64,
  title = "Unsupported Browser",
  description = "This application does not support legacy Internet Explorer browsers. Please try Chrome, Firefox, or Safari."
}) => {
  const { palette } = useTheme()
  return (
    <StyledIE10PlusBrowserWarning palette={palette}>
      <div>
        <div>
          <LanguageIcon
            style={{ width: iconSize, height: iconSize, marginBottom: "1rem" }}
          />
        </div>
        <Typography variant="h3">{title}</Typography>
        <p>{description}</p>
      </div>
    </StyledIE10PlusBrowserWarning>
  )
}

export const IE9PlusBrowserWarning = ({
  iconSize = 64,
  title = "Unsupported Browser",
  description = "This application does not support legacy Internet Explorer browsers. Please try Chrome, Firefox, or Safari."
}) => {
  const { palette } = useTheme()
  return (
    <StyledIE9PlusBrowserWarning palette={palette}>
      <div>
        <div>
          <LanguageIcon
            style={{ width: iconSize, height: iconSize, marginBottom: "1rem" }}
          />
        </div>
        <Typography variant="h3">{title}</Typography>
        <p>{description}</p>
      </div>
    </StyledIE9PlusBrowserWarning>
  )
}

export const IPhoneWarning = ({
  iconSize = 64,
  title = "Unsupported Device",
  description = "This application is currently optimised for viewing on tablet and desktop devices."
}) => {
  const { palette } = useTheme()
  return (
    <StyledIPhoneWarning palette={palette}>
      <div>
        <div>
          <PhonelinkEraseIcon
            style={{ width: iconSize, height: iconSize, marginBottom: "1rem" }}
          />
        </div>
        <Typography variant="h3">{title}</Typography>
        <p>{description}</p>
      </div>
    </StyledIPhoneWarning>
  )
}

export const OrientationWarning = ({
  iconSize = 64,
  title = "Please rotate your device.",
  description = "This application is currently optimised for viewing in landscape orientation."
}) => {
  const { palette } = useTheme()
  return (
    <StyledOrientationWarning palette={palette}>
      <div>
        <div>
          <ScreenRotationIcon
            style={{ width: iconSize, height: iconSize, marginBottom: "1rem" }}
          />
        </div>
        <Typography variant="h3">{title}</Typography>
        <p>{description}</p>
      </div>
    </StyledOrientationWarning>
  )
}
