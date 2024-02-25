import { ReactElement } from "react";

import SEO from "@/SEO";
import BaseLayout from "@/components/Layout/BaseLayout";
import BuiltContainer from "@/container/Built";

export default function Built() {
  return <BuiltContainer />;
}

Built.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <SEO title="받은소개" description="buildthebridge-built" />
      {page}
    </BaseLayout>
  );
};
