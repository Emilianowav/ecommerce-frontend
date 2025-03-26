import {create} from "zustand"
import {persist, createJSONStorage} from "zustand/middleware"

interface AuthState{
    user : {
        userId: string;
        userName: string;
        email: string
        role: "admin" | "customer";
    } | null;
    isAuthenticated: boolean;
    login: (user:{userId:string,userName:string,email:string,role:"admin" | "customer"}) => void;
    logout: ()=>void;
}

export const useAuthStore = create<AuthState> ()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,

            login: (user) => set(()=>({
                user,
                isAuthenticated: true
            })),

            logout: () => set(()=> ({
                user: null,
                isAuthenticated: false,
            }))
        }),
        {
            name: "session-storage",
            storage: createJSONStorage(() => (sessionStorage))
        }
        
    )
)