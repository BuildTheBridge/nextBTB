import { ReactElement } from "react";

import SEO from "@/SEO";
import BaseLayout from "@/components/Layout/BaseLayout";
import PartnersContainer from "@/container/Partners";

export default function Partners() {
  return <PartnersContainer />;
}

Partners.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <SEO title="우리지역파트너" description="buildthebridge-partner" />
      {page}
    </BaseLayout>
  );
};
