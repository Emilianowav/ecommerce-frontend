"use client"
import useRegisterForm from "../hooks/useRegisterForm"
import RegisterForm from "../components/RegisterForm";
// [] ||
export default function Register  () {

    const {error,loading,formData,handleChange,handleSubmit, checkpassword} = useRegisterForm();
    

    return(
        <div >
            <RegisterForm 
                error={error} 
                loading={loading} 
                formData={formData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
                checkpassword={checkpassword}
            />
        </div>
    )
}