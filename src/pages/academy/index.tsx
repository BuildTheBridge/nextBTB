import { ReactElement } from "react";

import SEO from "@/SEO";
import BaseLayout from "@/components/Layout/BaseLayout";
import AcademyContainer from "@/container/Academy";

export default function Academy() {
  return <AcademyContainer />;
}

Academy.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <SEO title="학원관리" description="buildthebridge-academy" />
      {page}
    </BaseLayout>
  );
};
