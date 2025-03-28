"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

export default function Login () {
    const [loginData, setLoginData] = useState({
        username : "",
        password: "",
    })
    const [error, setError] = useState<string>("")
    
    const router = useRouter();
    const login = useAuthStore((state) => (state.login))
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleLogin = async ()=>{

        try {
            if(!loginData.username || !loginData.password){
                throw new Error ("Por favor, ingrese un nombre de usuario y una contraseña.")
            }
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/users/login`, loginData)
            console.log(response);
            
            if (response?.data?.token) {
                localStorage.setItem("token", response.data.token);

                login({
                    userId: response.data.user.userId,
                    userName: response.data.user.userName,
                    email: response.data.user.email,
                    role: response.data.user.role
                })

                router.push("/");
            }

            
        } catch (error) {
            if(axios.isAxiosError(error)){
                const serverError = error.response?.data;
                if(serverError?.message){
                    setError(serverError.message);
                }
                console.error("error en la solicitud", error.response?.data)
            }
        }
    }
    return{
        error,
        loginData,
        handleChange,
        handleLogin
    }
}

