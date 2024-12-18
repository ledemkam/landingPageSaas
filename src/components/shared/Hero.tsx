import { uiInterface } from "../../assets"
import Button from "../layout/Button"
import Container from "../layout/Container"
import HeroTheme from "../theme/HeroTheme"

const Hero = () => {
  return (
    <div className="relative">
        <Container className="relative z-10 pt-10 lg:py-16 space-y-16">
            <div className="text-center max-w-2xl mx-auto px-16 lg:px-0 space-y-7">

            <h1 className="hero">
                Build {""}
                <span className="bg-gradient-to-b from-p-3 to-p-2 text-transparent bg-clip-text">
                    Modern              
                </span>
                {""}Sass for Startups 
            </h1>
            <p className="body-1 text-n-5">lorem ispsum loem lcoc ociof oococ jmcicnmlo   lorem       cjiuciu lotrem zuimnj</p>
            <Button theme="bg-p-3 hover:bg-p-2" href="#pricing" className="">
                Pricing and Plans
            </Button>
            </div>
            <img src={uiInterface} alt="UI interface" />
          {/* Add children here */}
          <div></div>

        </Container>
        <HeroTheme />
    </div>
  )
}
export default Hero