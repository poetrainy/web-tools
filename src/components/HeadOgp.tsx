import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { APP_DESCRIPTION, APP_NAME, APP_URL } from "~/constants/common";
import { OgpType } from "~/types/common";

type Props = {
  ogp?: OgpType;
};

const HeadOgp: FC<Props> = ({ ogp }) => {
  return (
    <>
      <Helmet>
        <title>{`${ogp ? ogp.name + "｜" : ""}${APP_NAME}`}</title>
        <meta
          property={"og:title"}
          content={`${ogp ? ogp.name + "｜" : ""}${APP_NAME}`}
        />
        <meta
          property={"og:url"}
          content={`${APP_URL}${ogp ? ogp.path : ""}`}
        />
        <meta
          property={"og:description"}
          content={ogp ? ogp.description : APP_DESCRIPTION}
        />
        {/* ページの種類 */}
        <meta property={"og:type"} content={"website"} />
        {/* サイト名 */}
        <meta property={"og:site_name"} content={APP_NAME} />
        {/* サムネイル画像の URL */}
        <meta name={"twitter:card"} content={"summary"} />
      </Helmet>
    </>
  );
};

export default HeadOgp;
