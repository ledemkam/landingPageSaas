import { social } from "../../constants"
import Container from "./Container"



const Footer = () => {
    const date = new Date()
  return (
    <div className="bg-n-7 py-5 lg:py-12 mt-5 lg:mt-16">
        <Container className="flex flex-col gap-3 lg:flex-row lg:gap-1 items-center justify-between body-3 text-n-3">
              <div className="flex items-center gap-4">
              {social.map((social) => (
                <a href={social.link} target="_blank" rel="noreferrer" key={social.id}>
                    <img src={social.ico} alt={social.alt} width={24} height={24} />
                </a>
              ))}
              </div>
              <div className="space-x-4">
                <a href="#terms&conditions" target="_blank" rel="noreferrer">
                    Terms & Conditions
                </a>
                <a  href="#privacypolicy" target="_blank" rel="noreferrer">
                    Privacy Policy
                </a>
              </div>
              <div>©{date.getFullYear()} All right right reserved{"  "}
                 <a href="#ledemkam" target="_blank" rel="noreferrer">
                    ledemkam
                 </a>
              </div>
        </Container>
    </div>
  )
}
export default Footer