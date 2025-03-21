export interface Login {
    loginData: {username: string, password: string},
    handleChange: (e:React.ChangeEvent<HTMLInputElement>)=>void,
    handleLogin: ()=>void,
    error: string
}