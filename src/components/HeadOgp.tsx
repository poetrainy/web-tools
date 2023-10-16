import { FC } from "react";
import { Helmet } from "react-helmet";
import {
  PROJECT_NAME,
  PROJECT_DESCRIPTION,
  PROJECT_URL,
} from "~/constants/common";

const HeadOgp: FC = () => {
  return (
    <>
      <Helmet>
        <title>{PROJECT_NAME}</title>
      </Helmet>
      <meta property={"og:title"} content={PROJECT_NAME} />
      <meta property={"og:url"} content={PROJECT_URL} />
      <meta property={"og:description"} content={PROJECT_DESCRIPTION} />
      {/* ページの種類 */}
      <meta property={"og:type"} content={"website"} />
      {/* サイト名 */}
      <meta property={"og:site_name"} content={PROJECT_NAME} />
      {/* サムネイル画像の URL */}
      <meta name={"twitter:card"} content={"summary"} />
      <meta name="apple-mobile-web-app-title" content={PROJECT_NAME} />
    </>
  );
};

export default HeadOgp;
