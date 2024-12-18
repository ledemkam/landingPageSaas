type ContainerProps = {
    children: React.ReactNode;
    className?: string;
}

const Container = ({children,className} : ContainerProps) => {
  return (
    <div className={`max-w-[80rem] mx-auto px-5 md:px-10 lg:px-15 ${className ?? ""}`}>
        {children}
    </div>
  )
}
export default Container