import {
  LinksFunction,
  MetaFunction,
  ActionArgs,
  json,
  redirect,
} from "@remix-run/node";

import Form from "../../components/form";

import style from "../styles/index.css";
import formStylesUrl from "../styles/form.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: style },
    { rel: "stylesheet", href: formStylesUrl },
  ];
};

export const action = async ({ request }: ActionArgs) => {
  await new Promise((res) => setTimeout(res, 1000));
  const Iform = await request.formData();
  const email = Iform.get("email");
  console.log(email);

  return { ok: true };

  redirect("/");
};

export default function Index() {
  return (
    <div className="container">
      <Form />
    </div>
  );
}
