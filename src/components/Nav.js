import Logo from '../asset/logo.png';
import  Menu from "./menu"

const Nav = () => {
    return (
        <div className = 'bg-slate-950 flex justify-between w-94 h-17 p-4'> 
            <img src={Logo} className = 'justify-center'/>
            <Menu/>
        </div>
        
    
    )
} 
export default Nav;