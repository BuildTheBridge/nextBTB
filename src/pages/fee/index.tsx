import { ReactElement } from "react";

import SEO from "@/SEO";
import BaseLayout from "@/components/Layout/BaseLayout";
import FeeContainer from "@/container/Fee";

export default function Fee() {
  return <FeeContainer />;
}

Fee.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <SEO title="받은수수료" description="buildthebridge-fee" />
      {page}
    </BaseLayout>
  );
};
