import { useState, useRef } from "react";
import LoginValidation from "../utils/LoginValidation";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const Login = () => {
    const [errorMsg, setErrorMsg] = useState(null)
    const inputTextemail = useRef();
    const password = useRef();
    const firstName = useRef();
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['name']);
    const handelClick = () => {
        navigate('/signup')
        

    }
    const evtBtnClick = () => {
        const checkFun = LoginValidation(inputTextemail.current.value, password.current.value);
        setErrorMsg(checkFun);
        if(errorMsg) return;
        if(cookies.Email === inputTextemail.current.value && cookies.Password === password.current.value) {
            navigate('/movi');
            localStorage.setItem("token","netflixgpt")
        }
        else {
            return "login creditial does not match";
        }
       
    }
    return (
        <>
            <h1>Login</h1>
            <div className="loginForm">
                <form class="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                 
                    <div className="relative z-0 w-full mb-5 group">
                        <input ref={inputTextemail}  type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input ref={password} type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                        <p>{errorMsg}</p>
                    <button onClick={evtBtnClick} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {"Login"}
                    </button>
                    <p onClick={handelClick}>{"New to Netflix? Sign up now."}</p>
                </form>
            </div>
        </>
    )
}
export default Login;