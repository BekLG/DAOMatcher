import IUser from "@/types/IUser";

export interface Response {
  result: IUser[];
}

export interface UpdateData {
  progress: number;
  curr_user: string;
  error: string;
}
