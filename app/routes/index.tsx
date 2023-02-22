import type { LinksFunction, ActionArgs } from "@remix-run/node";
import { useActionData } from "@remix-run/react";

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
};

export default function Index() {
  const data = useActionData<typeof action>();
  console.log(data);
  return (
    <div className="container">
      <Form />
    </div>
  );
}
