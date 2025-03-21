export interface RegisterFormProps{
    formData: {name: string, email:string, passwordHash:string, role: string};
    checkpassword: string;
    error: FormErrors;
    loading: boolean
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    
}

export interface FormErrors  {
    name?: string;
    email?: string;
    passwordHash?: string;
    checkpassword?: string;
};

