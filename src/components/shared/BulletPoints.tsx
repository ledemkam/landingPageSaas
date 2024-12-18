import { bulletPoints } from "../../constants"
import Container from "../layout/Container"
import Headings from "./Headings"

const BulletPoints = () => {
  return (
    <>
      <Headings title="Foxart" subTitle="how does it work?" />
      <Container>
         <div className="w-full max-w-6xl mx-auto py-5 lg:py-10 space-y-10 lg:space-y-24">
           {bulletPoints.map((point) => (
             <div 
               key={point.id} 
               className={`
               flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-28
               ${Number(point.id) % 2 === 0 ? "flex-row" : "lg:flex-row-reverse"}
               `}>
                <div className="flex justify-center w-full lg:w-7/12">
                    <img 
                      src={point.image}
                      alt={point.title}
                      width={point.width}
                      height={point.height} 
                      className="px-20 lg:px-0"
                      />
                </div>
                <div className="w-full lg:w-5/12 space-y-5 text-center lg:text-left">
                    <h3 className="h3">{point.title}</h3>
                    <p className="body-1 text-n-5">{point.text}</p>
                </div>
             </div>
           ))}
         </div>
      </Container>
    </>
  )
}
export default BulletPoints