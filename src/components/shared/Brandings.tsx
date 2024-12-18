import { branding } from "../../constants"
import Container from "../layout/Container"


const Brandings = () => {
  return (
    <Container>
        <div className="flex flex-wrap items-center justify-between lg:gap-1 max-w-5xl w-full mx-auto py-5 lg:py-10">
        {branding.map((brand, index) => (
            <div 
              className={`w-1/2 flex justify-center sm:1/4 md:w-1/4 lg:w-1/6 lg:p-1
                  ${branding.length % 2 !== 0 && index === branding.length - 1
                   ? "hidden lg:flex" : ""}`}
              key={brand.id}>
              <img src={brand.image} alt={brand.alt} width={180} height={96} />
            </div>
        ))}
        </div>
    </Container>
  )
}
export default Brandings