export interface ILogin {
  email: string;
  password: string;
}

export interface IReg extends ILogin {
  fullName: string;
}

export interface IResponseLogin {
  id: number;
  email: string;
  token: string;
}

export interface IResponseReg extends IResponseLogin {
  fullName: string;
  createdAt: string;
  updatedAt: string;
}
