import * as prettier from "prettier";
import { customPlugin } from "./prettier-plugin";

const formatWithCustomPrettier = (input: string) => {
  console.log(
    "🚀 ~ file: formatWithCustomPrettier.ts:5 ~ formatWithCustomPrettier ~ input:",
    input
  );
  return prettier.format(input, {
    plugins: [customPlugin],
    parser: "babel",
  });
};

export default formatWithCustomPrettier;
