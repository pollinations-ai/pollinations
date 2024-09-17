import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"
import { Box } from "@material-ui/core"
import { SocialLinks } from "./Social"
import { Colors, MOBILE_BREAKPOINT, HUGE_BREAKPOINT, BaseContainer } from "../styles/global"
import { LinkStyle } from "../pages/Home/components"
import { ImageURLHeading } from "../pages/Home/ImageHeading"
import AsciiArtGenerator from "./AsciiArtGenerator"

const Footer = () => {
  return (
    <OuterContainer>
      <FooterStyle>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <ImageURLHeading
            whiteText={false}
            width={250}
            height={100}
            customPrompt={`an image with the text "Let's talk" displayed in an elegant, decorative serif font. The font has high contrast between thick and thin strokes, that give the text a sophisticated and stylized appearance. The text is in black, set against a solid white background, creating a striking and bold visual contrast. Incorporate many colorful elements related to communication, such as speech bubbles, chat icons, mouths, and other related forms into the design of the font. Each letter features unique, creative touches that make the typography stand out. The text should take all the space without any margins.`}
          />
          <StyledLink href="mailto:hello@pollinations.ai">
            <b>hello@pollinations.ai</b>
          </StyledLink>
        </Box>
        <AsciiArtContainer>
          <AsciiArtGenerator />
        </AsciiArtContainer>
        <SocialContainer>
          <SocialLinks small gap="1em" invert />
        </SocialContainer>
        <LogoContainer>
          <NavLink to="/">
            <ImageURLHeading
              whiteText={false}
              width={250}
              height={100}
              customPrompt={`an image with the text "Pollinations" displayed in an elegant, decorative serif font. The font has high contrast between thick and thin strokes, that give the text a sophisticated and stylized appearance. The text is in black, set against a solid white background, creating a striking and bold visual contrast. Incorporate elements related to pollinations, digital circuitry, such as flowers, chips, insects, wafers, and other organic forms into the design of the font. Each letter features unique, creative touches that make the typography stand out. Incorporate elements related to pollinations, digital circuitry, and organic forms into the design of the font. The text should take all the space without any margins.`}
            />
          </NavLink>
        </LogoContainer>
        <TermsLinkContainer>
          <StyledNavLink to="/terms">
            <b>TERMS & CONDITIONS</b>
          </StyledNavLink>
        </TermsLinkContainer>
      </FooterStyle>
    </OuterContainer>
  )
}
export default Footer

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${Colors.background_body};
`
const SocialContainer = styled.div`
  grid-area: social;
  justify-self: flex-start;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    justify-self: center;
  }
`
const LogoContainer = styled.div`
  grid-area: logo;
  justify-self: flex-end;
  padding-top: 0em;
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    justify-self: center;
    padding-top: 2em;
  }
`
const AsciiArtContainer = styled.div`
  grid-area: ascii-art;
  justify-self: center;
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    justify-self: center;
    padding-top: 2em;
  }
`
const TermsLinkContainer = styled.div`
  grid-area: terms;
  justify-self: flex-end;
  margin-bottom: 2em;
  color: ${Colors.offblack};
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    justify-self: center;
    margin-top: 2em;
  }
`
const FooterStyle = styled(BaseContainer)`
  padding: 0em 3em 1em 3em;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  grid-template-areas:
    "lets-talk ascii-art logo"
    "social terms terms"
    "navigation_footer navigation_footer navigation_footer";

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "logo"
      "navigation_footer"
      "lets-talk"
      "ascii-art"
      "social"
      "terms";
    padding: 0;
    margin-bottom: 2em;
    max-width: 414px;
  }

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;

  color: ${Colors.offblack};

  a {
    color: ${Colors.offblack}; // Ensure the text color matches the style in Layouts.js
  }
`

const StyledLink = styled(LinkStyle)`
  transition: color 0.3s ease;
  &:hover {
    color: ${Colors.primary};
  }
`

const StyledNavLink = styled(NavLink)`
  transition: color 0.3s ease;
  &:hover {
    color: ${Colors.primary};
  }
`
