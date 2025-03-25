import { StaticImageData } from "next/dist/shared/lib/get-img-props";

export type ImageType = {
  src: StaticImageData;
  alt?: string;
};
