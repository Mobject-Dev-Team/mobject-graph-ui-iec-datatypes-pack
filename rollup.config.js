import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import fs from "fs";
import path from "path";
import license from "rollup-plugin-license";
import css from "rollup-plugin-css-only";

export default {
  input: "./src/index.js",
  output: [
    // UMD Build
    {
      file: "dist/mobject-graph-ui-iec-datatypes-pack.bundle.js",
      format: "umd",
      name: "MobjectGraphUiIecDatatypesPack",
      globals: {
        "mobject-graph-ui": "MobjectGraphUi",
      },
    },
    // Minified UMD Build
    {
      file: "dist/mobject-graph-ui-iec-datatypes-pack.bundle.min.js",
      format: "umd",
      name: "MobjectGraphUiIecDatatypesPack",
      globals: {
        "mobject-graph-ui": "MobjectGraphUi",
      },
      plugins: [terser()],
    },
    // ESM Build
    {
      file: "dist/mobject-graph-ui-iec-datatypes-pack.bundle.esm.js",
      format: "esm",
    },
    // Minified ESM Build
    {
      file: "dist/mobject-graph-ui-iec-datatypes-pack.bundle.esm.min.js",
      format: "esm",
      plugins: [terser()],
    },
    // CommonJS Build
    {
      file: "dist/mobject-graph-ui-iec-datatypes-pack.bundle.cjs.js",
      format: "cjs",
    },
    // Minified CommonJS Build
    {
      file: "dist/mobject-graph-ui-iec-datatypes-pack.bundle.cjs.min.js",
      format: "cjs",
      plugins: [terser()],
    },
  ],
  external: ["mobject-graph-ui"],
  plugins: [
    nodeResolve(),
    css({
      output: "mobject-graph-ui-iec-datatypes-pack.css",
    }),
    cssLicenseBanner(),
    license({
      sourcemap: true,
      cwd: process.cwd(),
      banner: {
        commentStyle: "regular",

        content: {
          file: path.join(__dirname, "LICENSE"),
          encoding: "utf-8",
        },
      },
      thirdParty: {
        allow: {
          test: "MIT",
          failOnUnlicensed: true,
          failOnViolation: true,
        },
      },
    }),
  ],
};

function makeLicenseContent() {
  const licenseFile = path.join(__dirname, "LICENSE");
  let licenseContent = fs.readFileSync(licenseFile, "utf-8");
  return licenseContent;
}

function cssLicenseBanner() {
  return {
    name: "css-license-banner",
    generateBundle(outputOptions, bundle) {
      const licenseContent = makeLicenseContent();
      const banner = `/*\n${licenseContent}\n*/\n`;

      for (const fileName of Object.keys(bundle)) {
        if (fileName.endsWith(".css")) {
          bundle[fileName].source = banner + bundle[fileName].source;
        }
      }
    },
  };
}
