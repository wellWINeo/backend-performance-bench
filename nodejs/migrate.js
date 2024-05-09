require("dotenv").config();

const { exec } = require("child_process");

if (process.argv.length != 3) {
  console.error("Not enough arguments. Provide migration name!");
  process.exit(1);
}

const migrationName = process.argv[2];

exec("npm run build", (err) => {
  if (err) {
    console.error(`Error during build: ${err.message}`);
    return;
  }
  console.log("Build successful");

  exec(
    `npx typeorm migration:generate -d ./dist/data/data-source.js ./src/data/migrations/${migrationName}`,
    (err) => {
      if (err) {
        console.error(`Error generating migration: ${err.message}`);
        return;
      }
      console.log("Migration generated successfully");
    }
  );
});
