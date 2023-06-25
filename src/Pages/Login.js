import LoginForm from "../Components/LoginForm";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";

//page de connexion
const Login = () => {
    return (
        <div className='Home'>
            <div className='TopBar'>
                <TopBar/>
            </div>
            <div className='SideBar'>
                <SideBar/>
            </div>
            <div className='Center'>
                <LoginForm/>
            </div>
        </div>
      );
}
 
export default Login;