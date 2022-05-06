import { Helmet } from "react-helmet-async";

type Props = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

export const Head = (props: Props) => {
  return (
    <Helmet title={props.title ? `${props.title} | Life Game` : undefined} defaultTitle="Life Game">
      <meta name="description" content={props.description} />
      <style>
        @import url(https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique&display=swap)
      </style>
      {props.children}
    </Helmet>
  );
};
