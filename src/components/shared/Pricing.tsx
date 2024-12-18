import { icoCheck } from "../../assets"
import { pricing } from "../../constants"
import Button from "../layout/Button"
import Container from "../layout/Container"
import Headings from "./Headings"

const Pricing = () => {
  return (
    <div id="pricing">
        <Headings title="Foxart" subTitle="Pricing" />
        <Container>
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-10 lg:mb-16">
            {pricing.map((price) => (
                <div key={price.id} className={price.featured ? "" : "lg:mt-14"}>         
                    <div 
                        className={`
                            ${price.featured ? "bg-n-7" : "bg-n-85"}
                            rounded-xl lg:rounded-2xl p-6  lg:p-12 text-center lg:text-start
                            `}
                            >
                        <div className="text-caption-1 text-n-5 uppercase">
                            {price.plan}
                        </div>
                        <div className="space-y-3">
                            <span className="h1 text-n-5">€</span>
                            <span className="h1">{price.amount}</span>
                        </div>
                        <hr className={`
                            "border-t mt-7 mb-4 lg:mt-16 lg:mb-8
                            ${price.featured ? "border-n-6" : "border-stroke-1"}
                            `}/>
                        <div className="space-y-4 pb-8">
                                {price.features.map((feature) => (
                                    <div key={feature} className="flex justify-center lg:justify-start items-center gap-3">
                                        <img src={icoCheck} alt="ico check" width={24}  height={24}/>
                                        <div className="body-2 text-n-3">{feature}</div>

                                    </div>
                                ))}
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <Button theme={price.featured ? "bg-p-3 hover:bg-p-2" : "bg-n-7 hover:bg-p-3"} href="#pricing" className="opacity-none">
                                {price.amount > 0 ? "Buy this plan" : "Get Started" }

                            </Button>

                        </div>
                    </div>
                </div>
            ))}
          </div>
        </Container>
    </div>
  )
}
export default Pricing