import { FC } from "react";
import { Helmet } from "react-helmet";
import { APP_NAME, APP_DESCRIPTION, APP_URL } from "~/constants/common";

const HeadOgp: FC = () => {
  return (
    <>
      <Helmet>
        <title>{APP_NAME}</title>
      </Helmet>
      <meta property="og:title" content={APP_NAME} />
      <meta property="og:url" content={APP_URL} />

      {/* 説明 */}
      <meta property="og:description" content={APP_DESCRIPTION} />
      {/* ページの種類 */}
      <meta property="og:type" content="website" />
      {/* サイト名 */}
      <meta property="og:site_name" content={APP_NAME} />
      {/* サムネイル画像の URL */}
      <meta property="og:image" content="img/icon.png" />
      <meta name="twitter:card" content="summary" />
      <link rel="icon" href="img/icon.png" />
    </>
  );
};

export default HeadOgp;
