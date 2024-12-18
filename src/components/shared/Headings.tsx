import Container from "../layout/Container"

    type HeadingsProps = {
    title: string
    subTitle: string
    }

const Headings = ({title,subTitle}: HeadingsProps) => {
  return (
    <Container className="py-5 lg:py-10">
        <div className="caption-1 text-n-5 text-center uppercase">
           {title}
        </div>
            <h2 className="h2 text-center">
                {subTitle}
            </h2>
    </Container>
  )
}
export default Headings