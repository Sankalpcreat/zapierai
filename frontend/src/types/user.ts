export interface UserCreate {
    username: string;
    email: string;
    password: string;
  }
  
  export interface UserLogin {
    email: string;
    password: string;
  }
  
  export interface UserResponse {
    id: number;
    username: string;
    email: string;
    createdAt: string;
  }
  