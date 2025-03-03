import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ImageType = {
  src: StaticImport;
  alt?: string;
};
