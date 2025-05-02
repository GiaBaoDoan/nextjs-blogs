// import { Reponse } from "@/types";

// const API_URL = process.env.NEXT_API_URL;

// export class CustomError extends Error {
//   status: number;
//   payload: {
//     message: string;
//   };

//   constructor({ payload, status }: Reponse<any>) {
//     super(payload.message);
//     this.status = status;
//     this.payload = payload;
//   }
// }

// export const fetchData = async <T>(
//   endpoint: string,
//   options?: RequestInit
// ): Promise<Reponse<T> | null> => {
//   const res = await fetch(`${API_URL}/api/${endpoint}`, {
//     ...options,
//   });

//   const payload = await res.json();

//   const data = {
//     status: res.status,
//     payload,
//   };

//   if (!res.ok) throw new CustomError(data);

//   return data;
// };
