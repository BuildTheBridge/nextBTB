import { ReactElement } from "react";

import SEO from "@/SEO";
import BaseLayout from "@/components/Layout/BaseLayout";
import MemberContainer from "@/container/Member";

export default function Member() {
  return <MemberContainer />;
}

Member.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <SEO title="회원관리" description="buildthebridge-member" />
      {page}
    </BaseLayout>
  );
};
