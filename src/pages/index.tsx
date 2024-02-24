import { ReactElement } from "react";

import SEO from "@/SEO";
import HomeContainer from "@/components/Home";
import BaseLayout from "@/components/Layout/BaseLayout";

export default function Home() {
  return <HomeContainer />;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <SEO />
      {page}
    </BaseLayout>
  );
};
