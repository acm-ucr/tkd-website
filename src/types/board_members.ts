import { StaticImageData } from "next/dist/shared/lib/get-img-props";

export type Member = {
  url: StaticImageData;
  position: string;
  name: string;
};
