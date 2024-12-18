
type primary = "bg-p-3 hover:bg-p-2"
type secondary = "bg-n-7 hover:bg-p-3"
type ButtonProps = {
    children: React.ReactNode;
    theme: primary | secondary | "";
    className: string;
    href?: string;
}
const Button = ({children,theme,className,href}: ButtonProps) => {

    const baseClasse ="text-white hover:text-white";
    const renderButton = () => {
        return <button className={`button py-3 px-3 lg:py-4 lg:px-6 rounded-lg ${theme} ${className} ${baseClasse}`}>{children}</button>
    }

    const renderLink = () => {
        return <a href={href} className={`button inline-block py-3 px-3 lg:py-4 lg:px-6 rounded-lg no-underline ${theme} ${className} ${baseClasse}`}>{children}</a>
    }
  return href ? renderLink() : renderButton()
}
export default Button