import { ReactElement } from "react";

import SEO from "@/SEO";
import HomeContainer from "@/container/Home";
import BaseLayout from "@/components/Layout/BaseLayout";

export default function Home() {
  return <HomeContainer />;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <SEO description="buildthebridge" />
      {page}
    </BaseLayout>
  );
};
