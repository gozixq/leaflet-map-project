
import { FaAngleDown } from "react-icons/fa";

function Profile() {
  
    return (
        <div className='flex flex-row items-center w-[280px] h-[76px] '>
          <div className='basis-[70px] pl-2'>
          <img 
                    src="src/assets/Generic avatar.png" // replace with actual image URL
                    alt="Profile"
                    className='w-[40px] h-[40px] rounded-full' // adjust size and make it circular
                />
          </div> 

          <div className='basis-[220px]'>
            <h1>Mr.Test Test</h1>
            <h2>test123456@gmail.com</h2>
          </div>
          <div className='basis-[30px] '>
          <FaAngleDown />
          </div>
          
        </div>
    )
  }
  
  export default Profile
  