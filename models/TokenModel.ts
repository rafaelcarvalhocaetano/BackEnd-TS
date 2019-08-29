export interface TokenModel {
    iss: string,
    iat: Date | any,
    exp: Date | any,
    username: string,
    email: string
}