import LayoutSite from "@/components/layout/LayoutSite";
import { FC, ReactNode } from "react";
interface ILayoutSiteProps {
  children: ReactNode;
}
const layout: FC<ILayoutSiteProps> = ({ children }) => {
  return <LayoutSite>{children}</LayoutSite>;
};

export default layout;
