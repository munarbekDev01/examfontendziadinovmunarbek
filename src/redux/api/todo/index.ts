import { api as index } from "./../index";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    getToDo: build.query<TODO.getToDoRes, TODO.getToDoReq>({
      query: () => ({
        url: "/002e3c17200f3ba68be27ebf1292fc09/fotoToDo",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    postToDo: build.mutation<TODO.postToDoRes, TODO.postToDoReq>({
      query: (data) => ({
        url: "/002e3c17200f3ba68be27ebf1292fc09/fotoToDo",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    editToDo: build.mutation<TODO.editToDoRes, TODO.editToDoReq>({
      query: ({ _id, data }) => ({
        url: `/002e3c17200f3ba68be27ebf1292fc09/fotoToDo/${_id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteToDo: build.mutation<TODO.deleteToDoRes, TODO.deleteToDoReq>({
      query: (id) => ({
        url: `/002e3c17200f3ba68be27ebf1292fc09/fotoToDo/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useDeleteToDoMutation,
  useEditToDoMutation,
  useGetToDoQuery,
  usePostToDoMutation,
} = api;
