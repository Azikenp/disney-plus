import logo from "../assets/Images/logo.png"

const Header = () => {
  return (
    <div>
        <img src={logo} className="w-[80px] object-cover" alt="logo" />
    </div>
  )
}

export default Header