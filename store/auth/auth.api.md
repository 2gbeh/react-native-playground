import { IApiResponse } from "../store.interface";
import { baseApi } from "../base/base.api";
import {
  ITodo,
  TodoEntity,
  QueryTodosDto,
  CreateTodoDto,
  UpdateTodoDto,
  UploadTodoDto,
} from "./todos.interface";
import { TodosPipe } from "./todos.pipe";
import mockTodosData from "./data/getAllTodos.json";
import mockTodoData from "./data/getTodoById.json";

type ReturnType = IApiResponse<TodoEntity>;

url = "/todo";
type = "authApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //
    // export type QueryTodosDto = void | { search: string }
    getAllTodos: build.query<ITodo[], QueryTodosDto>({
      query: (params) => ({
        method: "GET",
        url,
        ...(params && { params }),
      }),
      transformResponse: (res: TodoEntity[]) =>
        res?.map((todo) => TodosPipe.transform(todo)),
      providesTags: (res) =>
        res
          ? [
              ...res.map(({ id }) => ({ type, id } as const)),
              { type, id: "LIST" },
            ]
          : [{ type, id: "LIST" }],
    }),
    mockGetAllTodos: build.query<ITodo[], void>({
      queryFn: () => ({
        data: mockTodosData.map((todo) => TodosPipe.transform(todo)),
      }),
    }),
    getTodoById: build.query<ITodo, number>({
      query: (id) => `${url}/${id}`,
      transformResponse: (res: TodoEntity) => TodosPipe.transform(res!),
      providesTags: (result, error, id) => [{ type, id }],
    }),
    mockGetTodoById: build.query<ITodo, void>({
      queryFn: () => ({ data: TodosPipe.transform(mockTodoData) }),
    }),
    // export type CreateTodoDto = Omit<TodoEntity, "id">
    createTodo: build.mutation<TodoEntity, CreateTodoDto>({
      query: (body) => ({
        method: "POST",
        url,
        body,
      }),
      invalidatesTags: [{ type, id: "LIST" }],
    }),
    // export type UpdateTodoDto = Partial<CreateTodoDto>
    updateTodo: build.mutation<TodoEntity, UpdateTodoDto>({
      query: ({ id, body }) => ({
        method: "PATCH",
        url: `${url}/${id}`,
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type, id }],
    }),
    deleteTodo: build.mutation<TodoEntity, number>({
      query: (id) => ({
        method: "DELETE",
        url: `${url}/${id}`,
      }),
      invalidatesTags: (result, error, id) => [{ type, id }],
    }),
    // export type UploadTodoDto = { id: number; uri: string }
    uploadTodo: build.mutation<TodoEntity, UploadTodoDto>({
      query: ({ id, uri }) => {
        const formData = new FormData();
        formData.append("file", uri);
        return {
          method: "POST",
          headers: { "Content-Type": "multipart/form-data" },
          url: `${url}/${id}/upload`,
          body: formData,
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type, id }],
    }),
  }),
});