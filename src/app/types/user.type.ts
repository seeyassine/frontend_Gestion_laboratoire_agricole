export interface User {
  first_name : string;
  last_name : string;
  email: string;
  password: string;
  role: string;
}

export interface Admin  extends User {
  label: string;
}

export interface Biologist extends User {
  label: string;
}

export interface userLogin {
  email:string;
  password: string;
}

export interface loggedInUser {
  first_name : string;
  last_name : string;
  email: string;
  password: string;
  role: string;
}

export interface loginToken{
  token: string;
  expiresInSeconds: number;
  user:loggedInUser;
}
