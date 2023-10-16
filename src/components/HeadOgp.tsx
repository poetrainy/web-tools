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
      <meta property="og:title" content={PROJECT_NAME} />
      <meta property="og:url" content={PROJECT_URL} />

      {/* 説明 */}
      <meta property="og:description" content={PROJECT_DESCRIPTION} />
      {/* ページの種類 */}
      <meta property="og:type" content="website" />
      {/* サイト名 */}
      <meta property="og:site_name" content={PROJECT_NAME} />
      {/* サムネイル画像の URL */}
      <meta property="og:image" content="img/icon.png" />
      <meta name="twitter:card" content="summary" />
      <link rel="icon" href="img/icon.png" />
    </>
  );
};

export default HeadOgp;
