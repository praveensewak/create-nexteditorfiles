#!/usr/bin/env node

"use strict";

const fs = require("fs");

const editorconfig = {
  filename: ".editorconfig",
  content: `root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespaces = true
insert_final_newline = true
`,
};

const prettierrc = {
  filename: ".prettierrc",
  content: `{
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 125,
  "semi": false,
  "singleQuote": true
}
`,
};

const prettierignore = {
  filename: ".prettierignore",
  content: `dist
node_modules
.next
build
`,
};

function write(file, content) {
  if (fs.existsSync(file)) {
    console.error(`\nERROR: ${file} already exists.`);
    return;
  }

  fs.writeFileSync(file, content, {
    encoding: "utf-8",
    flag: "wx",
  });

  console.log(`\n${file} created. Enjoy!`);
}

try {
  write(editorconfig.filename, editorconfig.content);
  write(prettierrc.filename, prettierrc.content);
  write(prettierignore.filename, prettierignore.content);
} catch (error) {
  console.error(`\nERROR: ${error.message}`);
}
