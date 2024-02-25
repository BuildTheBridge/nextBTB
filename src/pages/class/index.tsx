import { ReactElement } from "react";

import SEO from "@/SEO";
import BaseLayout from "@/components/Layout/BaseLayout";
import ClassContainer from "@/container/Class";

export default function Class() {
  return <ClassContainer />;
}

Class.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <SEO title="수업관리" description="buildthebridge-class" />
      {page}
    </BaseLayout>
  );
};
