import { ReactElement } from "react";

import SEO from "@/SEO";
import BaseLayout from "@/components/Layout/BaseLayout";
import CoworkContainer from "@/container/Cowork";

export default function Cowork() {
  return <CoworkContainer />;
}

Cowork.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <SEO title="협력관리" description="buildthebridge-commission" />
      {page}
    </BaseLayout>
  );
};
