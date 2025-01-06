"use client";
import { FC, useState } from "react";
import scss from "./ToDoList.module.scss";
import {
  useDeleteToDoMutation,
  useEditToDoMutation,
  useGetToDoQuery,
} from "@/redux/api/todo";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePostFileMutation } from "@/redux/api/upload";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
const ToDoList: FC = () => {
  const { data } = useGetToDoQuery();
  const [editToDoMutation] = useEditToDoMutation();
  const [deleteToDoMutation] = useDeleteToDoMutation();
  const [editId, setEditId] = useState<null | number>(null);
  const [postFileMutation] = usePostFileMutation();
  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TODO.postToDoReq>();

  const onEditing: SubmitHandler<TODO.postToDoReq> = async (data) => {
    const formData = new FormData();
    formData.append("file", data?.img![0]);
    const { data: file } = await postFileMutation(formData);
    const newData = {
      img: file?.url,
      title: data.title,
      ptice: data.price,
    };
    await editToDoMutation({ _id: Number(editId), data: newData });
    reset();
    setEditId(null);
  };
  return (
    <section className={scss.ToDoList}>
      <div className="container">
        <div className={scss.content}>
          {data &&
            data.map((el, idx) => (
              <div key={el._id} className={scss.block}>
                <div className={scss.textAndImg}>
                  <h6>{idx + 1}</h6>
                  <Zoom>
                    <img src={el.img} alt={el.title} />
                  </Zoom>
                  <h1>{el.title}</h1>
                </div>

                <p>{el.price}$</p>

                <div className={scss.btns}>
                  <form onSubmit={handleSubmit(onEditing)}>
                    {(editId === el._id && (
                      <>
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
                          type="text"
                          placeholder="price"
                          {...register("price", { required: true })}
                        />
                      </>
                    )) ||
                      null}

                    {editId === el._id ? (
                      <button onClick={() => setEditId(null)}>Close</button>
                    ) : (
                      <button
                        onClick={async () =>
                          await deleteToDoMutation(Number(el._id))
                        }
                      >
                        Delete
                      </button>
                    )}

                    <button onClick={() => setEditId(Number(el._id))}>
                      Edit
                    </button>
                  </form>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ToDoList;
