export interface IRegistrationData {
    name: string;
    passGroup: {
        confirmPassword: string,
        password: string
    }
}
