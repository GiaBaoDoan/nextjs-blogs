import configAxios from "@/lib/axios";
import { TagSchemaType } from "@/schema/tag.schema";
import { Response } from "@/types";
import { Tag } from "@/types/tag.type";

const TagServices = {
  post: (data: TagSchemaType) => configAxios.post<Response>("/tags", data),

  get: () => configAxios.get<Response<Tag[]>>("/tags"),

  getById: (id: string) => configAxios.get<Response<Tag>>(`/tags/${id}`),

  delete: (id: string) => configAxios.delete<Response>(`/tags/${id}`),

  put: (id: string, data: TagSchemaType) =>
    configAxios.put<Response<Tag>>(`/tags/${id}`, data),
};

export default TagServices;
