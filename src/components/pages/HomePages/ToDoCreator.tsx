"use client";
import { FC } from "react";
import scss from "./ToDoCreator.module.scss";
import { usePostFileMutation } from "@/redux/api/upload";
import { usePostToDoMutation } from "@/redux/api/todo";
import { SubmitHandler, useForm } from "react-hook-form";
const ToDoCreator: FC = () => {
  const [postFileMutation] = usePostFileMutation();
  const [postToDoMutation] = usePostToDoMutation();
  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TODO.postToDoReq>();

  const onPosting: SubmitHandler<TODO.postToDoReq> = async (data) => {
    const formData = new FormData();
    formData.append("file", data?.img![0]);
    const { data: file } = await postFileMutation(formData);
    const newData = {
      img: file?.url,
      title: data.title,
      price: data.price,
    };
    await postToDoMutation(newData);
    reset();
  };
  return (
    <section className={scss.ToDoCreator}>
      <center
        style={{
          color: "white",
        }}
      >
        TO DO LIST
      </center>
      <div className="container">
        <div className={scss.content}>
          <form onSubmit={handleSubmit(onPosting)}>
            <input
              type="file"
              placeholder="img"
              {...register("img", { required: true })}
            />
            <input
              type="text"
              placeholder="title"
              {...register("title", { required: true })}
            />
            <input
              type="number"
              placeholder="price"
              {...register("price", { required: true })}
            />
            {!isSubmitting ? (
              <button type="submit">Creator</button>
            ) : (
              <button disabled>Loading</button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ToDoCreator;
