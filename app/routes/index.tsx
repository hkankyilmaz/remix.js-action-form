import type { LinksFunction, MetaFunction } from "@remix-run/node";
import Form from "../../components/form";

import style from "../styles/index.css";
import formStylesUrl from "../styles/form.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: style },
    { rel: "stylesheet", href: formStylesUrl },
  ];
};

export default function Index() {
  return (
    <div className="container">
      <Form />
    </div>
  );
}
