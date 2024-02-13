export const  SignupValidataion = (email, password, confirmPassword)=> {
        const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       const passwordReg =   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const validateEmail = emailReg.test(email);
        const validatePassword = passwordReg.test(password);
        const validateConfirmPass = passwordReg.test(confirmPassword);
    //    console.log(email, "testst")
        if(email == "") return "Email Required";
        if(!validateEmail) return "email not validate";
        if(!validatePassword) return "password not match";
        if(!validateConfirmPass) return "Confirm password not match";
        if(password !== confirmPassword) return "password and confirm password not match";
    return null;
}
