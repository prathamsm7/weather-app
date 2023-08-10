import { render } from "@testing-library/react";
import Weather from "../Weather";

test("Load Weather Component", () => {
  const result = render(<Weather />);

  console.log(result);
});
