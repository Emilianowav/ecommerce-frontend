import {create} from "zustand"

interface AuthState{
    user : {
        id: string;
        name: string;
        email: string
        role: "admin" | "customer";
    } | null;
    isAuthenticated: boolean;
    login: (user:{id:string,name:string,email:string,role:"admin" | "customer"}) => void;
    logout: ()=>void;
}

export const useAuthStore = create<AuthState> ((set)=> ({
    user: null,
    isAuthenticated: false,

    login: (user) => set(()=> ({
        user,
        isAuthenticated:true
    })),
    logout: ()=> set(()=> ({
        user: null,
        isAuthenticated:false
    }))
    

}))