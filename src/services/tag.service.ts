import configAxios from "@/lib/axios";
import { TagSchemaType } from "@/schema/tag.schema";
import { Response } from "@/types";
import { Tag } from "@/types/tag.type";

export const getTags = async () => {
  const res = await configAxios.get<Response<Tag[]>>("/tags");
  return res.data;
};

export const getTag = async (id: string) => {
  const res = await configAxios.get<Response<Tag>>(`/tags/${id}`);
  return res.data;
};

export const createTag = async (data: TagSchemaType) => {
  const res = await configAxios.post<Response>("/tags", data);
  return res.data;
};

export const updateTag = async (id: string, data: TagSchemaType) => {
  const res = await configAxios.put<Response>(`/tags/${id}`, data);
  return res.data;
};

export const deleteTag = async (id: string) => {
  const res = await configAxios.delete<Response>(`/tags/${id}`);
  return res.data;
};
