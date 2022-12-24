import { solvePart1, solvePart2 } from "./index";
import { InputType, readInput } from "../../helpers/readInput";

describe("Day 24", () => {
  describe.each<[InputType, number, number]>([
    ["simpleInput", 18, 54],
    ["puzzleInput", 283, 883],
  ])("%s", (filename, expectedPart1, expectedPart2) => {
    it("should solve part 1", async () => {
      const input = await readInput(__dirname, filename);

      expect(solvePart1(input)).toBe(expectedPart1);
    });

    it("should solve part 2", async () => {
      const input = await readInput(__dirname, filename);

      expect(solvePart2(input)).toBe(expectedPart2);
    });
  });
});
