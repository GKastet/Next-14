import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog"
  // title: {
  //   absolute: "Blog", //ignores template from layout
  // },
};

export default function Blog() {
  return <h1>My blog</h1>;
}
