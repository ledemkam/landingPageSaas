import { icoArrowRight } from "../../assets"
import Button from "../layout/Button"
import Container from "../layout/Container"
type CalltoActionProps = {
    minify : boolean
}

const CalltoAction = ({minify}: CalltoActionProps) => {
  return (
    <Container>
        <div className="max-w-4xl mx-auto py-5 lg:py-10">
          <div 
          className={`flex flex-col items-center rounded-xl lg:rounded-3xl bg-gradient-to-tl from-p-3 to-p-4 gap-8 p-6 lg:p-16 
                     ${ 
                         !minify 
                       ? "flex flex-col items-center" 
                       :"flex flex-col items-center justify-between lg:flex lg:flex-row lg:items-center"}`}>
          <div className={minify ? "space-y-1 text-center lg:text-start" : "space-y-4 text-center"}>
             <div className="caption-1 text-n-1/50">
                Ready to Start ?
             </div>
                <h3 className="h3">Start your free trial today!</h3>
           </div>
           <Button theme="bg-p-3 hover:bg-p-2"  className="flex items-center justify-center gap-1">
              <span>Get Startet</span>
              <img src={icoArrowRight} alt="arrow-right" width={24} height={24} />
           </Button>
          </div>
        </div>
    </Container>
  )
}
export default CalltoAction