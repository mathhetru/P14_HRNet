import { describe, it, expect } from "vitest";
import { departmentsForSelect, formatDateToDayTime } from "./utils";

describe("departmentsForSelect", () => {
  it("should return the departments data with id", () => {
    const result = departmentsForSelect();
    expect(result).toEqual([
      {
        id: 0,
        name: "Sales",
      },
      {
        id: 1,
        name: "Marketing",
      },
      {
        id: 2,
        name: "Engineering",
      },
      {
        id: 3,
        name: "Human Resources",
      },
      {
        id: 4,
        name: "Legal",
      },
    ]);
  });
});

describe("formatDateToDayTime", () => {
  it("should return the date formatted to day time", () => {
    const date = new Date("2021-09-01");
    const result = formatDateToDayTime(date);
    expect(result).toEqual("01/09/2021");
  });

  it("should return an empty string if the date is null", () => {
    const result = formatDateToDayTime(null);
    expect(result).toEqual("");
  });

  it("should return an empty string if the date is undefined", () => {
    const result = formatDateToDayTime(undefined);
    expect(result).toEqual("");
  });
});
