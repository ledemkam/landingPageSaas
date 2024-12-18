import { logoApp } from "../../assets"
import Button from "./Button"
import Container from "./Container"
import HeaderTheme from "../theme/EHeaderTheme"

const Header = () => {
  return (
    <header className="border-b border-stroke-1">
      <Container className={"relative bg-n-9"}>
        <div className="relative z-10 flex items-center justify-between py-4 lg:py-6">
          <img src={logoApp} width={104} height={32} alt="App_logo" />
          <Button theme="bg-n-7 hover:bg-p-3" className="" href="#">Login</Button>
        </div>
        <HeaderTheme />
      </Container>
    </header>
  )
}
export default Header