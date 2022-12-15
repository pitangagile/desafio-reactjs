import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";

export const FilmPage = (props: { item: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
  return <div>FilmPage {props.item}</div>;
};
