import { ReactElement, Ref } from "react";

import SEO from "@/SEO";
import BaseLayout from "@/components/Layout/BaseLayout";
import HomeContainer from "@/container/Home";

interface IProps {
  element: Ref<HTMLElement>;
  onMoveToElement: () => void;
}

export default function Home(props: IProps) {
  const { element, onMoveToElement } = props;
  return <HomeContainer element={element} onMoveToElement={onMoveToElement} />;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <SEO description="buildthebridge" />
      {page}
    </BaseLayout>
  );
};
