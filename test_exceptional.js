import { execSync } from "child_process";
import fs from "fs";

async function runAllTests() {
  console.log("Starting all tests...\n");

  try {
    // Clean previous results
    if (fs.existsSync("./allure-results")) {
      fs.rmSync("./allure-results", { recursive: true });
    }

    console.log("=== Running Q1 Test ===");
    execSync("node q1test.js", { stdio: "inherit" });
    console.log("\n=== Q1 Test Completed ===\n");

    console.log("=== Running Q2 Test ===");
    execSync("node q2test.js", { stdio: "inherit" });
    console.log("\n=== Q2 Test Completed ===\n");

    console.log("=== Running Q3 Test ===");
    execSync("node q3test.js", { stdio: "inherit" });
    console.log("\n=== Q3 Test Completed ===\n");

    console.log("=== Running Exceptional Test ===");
    execSync("node test_exceptional.js", { stdio: "inherit" });
    console.log("\n=== Exceptional Test Completed ===\n");

    console.log("All tests completed successfully!");

  } catch (error) {
    console.log("Error running tests: " + error.message);
  }
}

runAllTests();