namespace TODO {
  type getToDoRes = {
    _id?: number;
    title: string;
    price: number;
    img: string;
  }[];
  type getToDoReq = void;

  type deleteToDoRes = void;
  type deleteToDoReq = number | undefined;

  type postToDoRes = void;
  type postToDoReq = {
    img?: string;
    title: string;
    price: number;
  };

  type editToDoRes = void;

  type editToDoReq = {
    _id?: number;
    data?: {
      price?: number;
      title?: string;
      img?: string;
    };
  };
}
