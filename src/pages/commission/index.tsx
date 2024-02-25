import { ReactElement } from "react";

import SEO from "@/SEO";
import BaseLayout from "@/components/Layout/BaseLayout";
import CommissionContainer from "@/container/Commission";

export default function Commission() {
  return <CommissionContainer />;
}

Commission.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <SEO title="소개수수료" description="buildthebridge-commission" />
      {page}
    </BaseLayout>
  );
};
