import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "The outage wasn't my code — it was the one function I marked 'temporary' two years ago finally filing for retirement at 3 a.m. on a Friday, during my holiday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
