import { api as index } from "./../index";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    postFile: build.mutation<UPLOAD.postFileRes, UPLOAD.postFileReq>({
      query: (data) => ({
        url: "/upload/file",
        method : "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { usePostFileMutation } = api;
