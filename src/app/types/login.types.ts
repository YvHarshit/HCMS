import { LoginFormData } from "@/validations/loginData";

export interface LoginFormProps {
  onLogin: (data: LoginFormData) => Promise<void>;
}