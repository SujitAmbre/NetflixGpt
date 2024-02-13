const LoginValidation = (email, password, ) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var regularExpressionPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const validateEmail = emailRegex.test(email);
    const validatePassword = regularExpressionPassword.test(password);
    if (!validateEmail) return "email not validate";
    if (!validatePassword) return "password invalidate";
    
    return null;

}
export default LoginValidation;