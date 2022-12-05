export interface ILogin {
  email: string;
  password: string;
}

export interface IReg extends ILogin {
  fullName: string;
}


export interface ResponseUsers {
  id: number;
  fullName: string;
  email: string;
  token: string;
  createAt: string;
  updateAt: string;
}
