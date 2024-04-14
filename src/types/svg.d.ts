declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const content: any;

  export default content;
}
// declare module "*.svg" {
//   import React from "react";
//   const svg: React.FC<React.SVGProps<SVGSVGElement>>;
//   export default svg;
// }
