"use client";
import { FC, ReactNode } from "react";
import scss from "./ReduxProvider.module.scss";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "@/redux/api";
interface IReduxProvider {
  children: ReactNode;
}
const ReduxProvider: FC<IReduxProvider> = ({ children }) => {
  return <ApiProvider api={api}>{children}</ApiProvider>;
};

export default ReduxProvider;
