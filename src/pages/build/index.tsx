import { ReactElement } from "react";

import SEO from "@/SEO";
import BaseLayout from "@/components/Layout/BaseLayout";
import BuildContainer from "@/container/Build";

export default function Build() {
  return <BuildContainer />;
}

Build.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <SEO title="내가 한 소개" description="buildthebridge-build" />
      {page}
    </BaseLayout>
  );
};
