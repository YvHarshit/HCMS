import { LoginFormData } from "@/validations/authData";

export interface LoginFormProps {
  onLogin: (data: LoginFormData) => Promise<void>;
}