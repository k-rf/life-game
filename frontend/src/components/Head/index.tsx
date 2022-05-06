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
      {props.children}
    </Helmet>
  );
};
