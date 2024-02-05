import ToggleButton from "./toggbleButton/toggbleButton"; 
import Links from "./links/Links"; 

const Sidebar = () => {
    return (
    <div className="flex flex-col align-center justify-center bg-black text-white fixed top-0 left-0 w-[400px] bg-black">
        <div>
            < Links/>
        </div>
        <ToggleButton/>
    </div>
    )
}

export default  Sidebar