import configAxios from "@/lib/axios";
import { Response } from "@/types";
import { LikePost } from "@/types/like.type";

export const getLikeList = async (blogId: string) => {
  const res = await configAxios.get<Response<LikePost>>(`/like/${blogId}`);
  return res.data;
};

export const updateStatusLike = async (blogId: string) => {
  try {
    const res = await configAxios.put<Response>(`/like/${blogId}`);
    return res.data;
  } catch (err: any) {
    throw new Error(err.response.data.message || "Đã có lỗi xảy ra");
  }
};
