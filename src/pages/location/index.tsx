import { ReactElement } from "react";

import SEO from "@/SEO";
import BaseLayout from "@/components/Layout/BaseLayout";
import LocationContainer from "@/container/Location";

export default function Location() {
  return <LocationContainer />;
}

Location.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <SEO title="지역관리" description="buildthebridge-location" />
      {page}
    </BaseLayout>
  );
};
