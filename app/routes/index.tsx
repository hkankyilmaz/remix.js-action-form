import React from "react";
import type { LinksFunction, ActionArgs } from "@remix-run/node";
import { useActionData, useNavigation, useTransition } from "@remix-run/react";

import Form from "../../components/form";

import style from "../styles/index.css";
import formStylesUrl from "../styles/form.css";

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const FORM_ID = process.env.FORM_ID;
const API = "https://api.convertkit.com/v3";

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

  const res = await fetch(`${API}/forms/${FORM_ID}/subscribe`, {
    method: "post",
    body: JSON.stringify({ email, api_key: API_KEY }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  return res.json();
};

export default function Index() {
  const data = useActionData<typeof action>();
  const navigation = useNavigation();
  let state: any = navigation.formData;

  React.useEffect(() => {
    console.log(navigation);
  }, [state]);

  console.log(navigation.formAction);
  return (
    <div className="container">
      {state}
      <Form />
    </div>
  );
}
