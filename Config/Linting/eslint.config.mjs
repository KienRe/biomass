import { fixupPluginRules } from "@eslint/compat";
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylisticJS from '@stylistic/eslint-plugin-js';
import stylisticTS from '@stylistic/eslint-plugin-ts';
import stylisticJSX from '@stylistic/eslint-plugin-jsx';
import * as eslintImport from "eslint-plugin-import";
import * as depend from "eslint-plugin-depend";
import react from "eslint-plugin-react";
import reacthooks from "eslint-plugin-react-hooks";
import eslintNext from "@next/eslint-plugin-next";
import unicorn from 'eslint-plugin-unicorn';
import noUnsanitized from "eslint-plugin-no-unsanitized";
import tailwindCSS from "eslint-plugin-tailwindcss";
import reactPerf from "eslint-plugin-react-perf";
import reactRefresh from "eslint-plugin-react-refresh";
import security from "eslint-plugin-security";
import vitest from "@vitest/eslint-plugin";
import globals from 'globals';

// Debug this file via npm run format:inspect
// See https://www.raulmelo.me/en/blog/migration-eslint-to-flat-config for basic reference

/** @type { import("typescript-eslint").Config } */
export default
[
    // Global Ignores
    {
        name: "Ignores",
        ignores: ["next.config.js", "**/node_modules/**", "**/out/**", "**/.next/**", "**/Config/**", "**/Scripts/**"]
    },

    // Global Files
    {
        name: "Files",
        files: [ "**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx", "**/*.mts", "**/*.mjs"],
    },

    // Globals
    {
        name: "Globals",
        languageOptions:
        {
            globals:
            {
                ...globals.browser,
                ...globals.node,
                ...globals.jest,
                ...globals.es2022,
                React: 'readonly'
            },
        }
    },

    // Language Options
    {
        name: "LanguageOptions",
        languageOptions:
        {
            parserOptions:
            {
                ecmaVersion: 2020,
                sourceType: "module",
                // React
                ecmaFeatures: { jsx: true },
                // TypesScript
                parser: 'typescript-eslint/parser',
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },

    // Plugins
    {
        name: "Plugins",
        plugins:
        {
            "@import": eslintImport,
            '@stylistic/js': stylisticJS,
            "@stylistic/ts": stylisticTS,
            "@stylistic/jsx": stylisticJSX,
            "@next/next": fixupPluginRules(eslintNext),
            "react": fixupPluginRules(react),
            "react-hooks": fixupPluginRules(reacthooks),
            "unicorn": unicorn,
            "depend": depend,
            "no-unsanitized": noUnsanitized,
            "tailwindcss": tailwindCSS,
            "react-perf": reactPerf,
            "react-refresh": reactRefresh,
            "security": security,
            "vitest": vitest
        },
    },
    
    // Base JavaScript, https://eslint.org/docs/latest/rules
    {
        name: "JavaScriptBase",
        ...eslint.configs.recommended,
    },

    // Additional JavaScript
    {
        name: "JavaScriptCustom",
        rules:
        {
            // Enforce curly braces
            "curly": "error",
        },
    },

    // Stylistic, https://eslint.style/packages/js?
    {
        name: "Stylistic",
        rules:
        {
            // ---------------- JAVASCRIPT ----------------

            // -- SPACING --

            // No spaces inside array brackets
            "@stylistic/js/array-bracket-spacing": ["error", "never"],
            // Arrow spacing before and after
            "@stylistic/js/arrow-spacing": "error",
            // Spaces before and after blocks
            "@stylistic/js/block-spacing": "error",
            // Spaces before and after commas
            "@stylistic/js/comma-spacing": ["error", { "before": false, "after": true }],
            // No spaces in computed properties, obj[foo]
            "@stylistic/js/computed-property-spacing": ["error", "never"],
            // No spaces when calling a function
            "@stylistic/js/function-call-spacing": ["error", "never"],
            // Spaces before and after the * in generator functions
            "@stylistic/js/generator-star-spacing": ["error", {"before": true, "after": false}],
            // No spaces between keys and values in objects, { "foo" : 42 };
            "@stylistic/js/key-spacing": ["error", { "beforeColon": false }],
            // Spaces before and after keywords
            "@stylistic/js/keyword-spacing": ["error"],
            // No mixed spaces and tabs
            "@stylistic/js/no-mixed-spaces-and-tabs": "error",
            // No multiple spaces in a row
            "@stylistic/js/no-multi-spaces": "error",
            // No trailing spaces at the end of lines
            "@stylistic/js/no-trailing-spaces": "error",
            // No spaces between objects and their properties, foo. bar
            "@stylistic/js/no-whitespace-before-property": "error",
            // No spaces between curly braces for objects
            "@stylistic/js/object-curly-spacing": ["error", "never"],
            // No spaces between rest and spread operators
            "@stylistic/js/rest-spread-spacing": ["error"],
            // Space after semicolons and no space before
            "@stylistic/js/semi-spacing": "error",
            // Space before block
            "@stylistic/js/space-before-blocks": "error",
            // Space before function parameters
            "@stylistic/js/space-before-function-paren": "error",
            // No spaces in function parameters
            "@stylistic/js/space-in-parens": ["error", "never"],
            // Space between infix operators, a+b
            "@stylistic/js/space-infix-ops": "error",
            // Space after unary operators, new / delete / typeof / void
            "@stylistic/js/space-unary-ops": "error",
            // Space after comments
            "@stylistic/js/spaced-comment": ["error", "always"],
            // Space after colon in switch statements
            "@stylistic/js/switch-colon-spacing": "error",
            // No spaces in template strings, ${people.name}
            "@stylistic/js/template-curly-spacing": "error",
            // No spaces between template tags and their content, func`Hello world`
            "@stylistic/js/template-tag-spacing": "error",
            // Spacing around the * in yield* expressions
            "@stylistic/js/yield-star-spacing": ["error", "after"],

            // -- LINE BREAKS --

            // No line breaks after opening and before closing array brackets
            "@stylistic/js/array-bracket-newline": ["error", "never"],
            // No line break between array elements
            "@stylistic/js/array-element-newline": ["error", "never"],
            // One line break at the end of the file
            "@stylistic/js/eol-last": ["error", "always"],
            // No line breaks between arguments of a function call
            "@stylistic/js/function-call-argument-newline": ["error", "never"],
            // No line breaks inside function parentheses
            "@stylistic/js/function-paren-newline": ["error", "never"],
            // Disabled because sometimes I want inline and sometimes below
            //"@stylistic/js/implicit-arrow-linebreak": ["error", "beside"],
            // Line break style
            "@stylistic/js/linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")],
            // Disabled, dont care about line breaks around comments
            "@stylistic/js/lines-around-comment": ["error", { "beforeBlockComment": false }],
            // Enforce line breaks between class members
            "@stylistic/js/lines-between-class-members": ["error", "always"],
            // No line breaks in ternary operators
            "@stylistic/js/multiline-ternary": ["error", "never", { "ignoreJSX": true }],
            // Newline per chained call
            "@stylistic/js/newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
            // Requires line breaks if there are line breaks inside properties or between properties, otherwise disallows line breaks
            "@stylistic/js/object-curly-newline": ["error", { "multiline": true }],
            // Do not splitup object properties
            "@stylistic/js/object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
            // Line break after operators
            "@stylistic/js/operator-linebreak": ["error", "after"],
            // padding-line-between-statements

             // -- BRACKETS --

            // Enforce brace style
            "@stylistic/js/brace-style": ["error", "allman", { "allowSingleLine": true }],
            // Requires parens around arguments in all cases
            "@stylistic/js/arrow-parens": ["error", "always"],
            // Requires parens around new expressions new Person()
            "@stylistic/js/new-parens": "error",
            // No unnecessary parentheses
            "@stylistic/js/no-extra-parens": "error",
            // /foo/ -> (/foo/)
            "@stylistic/js/wrap-regex": "error",
            // Immediately-invoked function expressions to be wrapped in parentheses.
            "@stylistic/js/wrap-iife": ["error", "outside"],

             // -- INDENT --

             // Indentation is 4 spaces
             "@stylistic/js/indent": ["error", 4],

            // -- QUOTES --

            // Prefer double quotes for JSX
            "@stylistic/js/jsx-quotes": ["error", "prefer-double"],
            // Disallows quotes around object literal property names that are not strictly required
            "@stylistic/js/quote-props": ["error", "as-needed"],
            // Prefer double quotes
             "@stylistic/js/quotes": ["error", "double"],

            // -- COMMAS --

            // No dangling comma
            "@stylistic/js/comma-dangle": ["error", "never"],
            // Requires a comma after and on the same line as an array element, object property, or variable declaration
            "@stylistic/js/comma-style": ["error", "last"],

            // -- SEMIS --

            // No extra semicolons
            "@stylistic/js/no-extra-semi": "error",
            // Require semicolons at the end of statements
            "@stylistic/js/semi": ["error", "always"],
            // Requires a semicolon at the end of the last statement in a block
            "@stylistic/js/semi-style": ["error", "last"],

            // -- OPERATORS --

            // dot in a member expression should be on the same line as the property portion
            "@stylistic/js/dot-location": ["error", "property"], 

            // -- DISALLOW --

            // a => 1 ? 2 : 3, intent is not clear
            "@stylistic/js/no-confusing-arrow": "error",
            // Max empty lines of two
            "@stylistic/js/no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 0 }],

            // -- MISC --

            // Max line length
            "@stylistic/js/max-len": ["error", { "code": 225 }],
            // Max statements per line
            "@stylistic/js/max-statements-per-line": ["error", { "max": 2 }],
            // Position of non-block statements
            "@stylistic/js/nonblock-statement-body-position": ["error", "below"],
            // Enforce newline around variable initializers
            "@stylistic/js/one-var-declaration-per-line": ["error", "initializations"],
            // Disallows empty lines at the beginning and ending of block statements
            "@stylistic/js/padded-blocks": ["error", "never"],

            // -- IMPORT --
            "@import/order":
            [
                "error",
                {
                    groups:
                    [
                        "builtin",
                        "external",
                        "internal",
                        "parent",
                        "sibling",
                        "index",
                    ],
                    pathGroups:
                    [
                        {
                            pattern: "react",
                            group: "builtin",
                            position: "before",
                        },
                        {
                            pattern: "@/**",
                            group: "internal",
                        },
                    ],
                    pathGroupsExcludedImportTypes: ["react"],
                    alphabetize:
                    {
                            order: "asc",
                            caseInsensitive: true,
                    },
                    "newlines-between": "never",
                },
            ],

            // ---------------- TYPESCRIPT ----------------

            // -- SPACING --

            // Type annotation spacing, name: string;
            "@stylistic/ts/type-annotation-spacing": "error",

            // -- MISC --

            // TypeScript allows three delimiters between members in interfaces and type aliases
            "@stylistic/ts/member-delimiter-style": 
            [
                "error", 
                { 
                    "multiline": { "delimiter": "semi", "requireLast": true },  
                    "singleline": { "delimiter": "semi", "requireLast": true },
                    "multilineDetection": "brackets"
                }
            ],

            // ---------------- JSX ----------------

            // -- SPACING --
            
            // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
            "@stylistic/jsx/jsx-child-element-spacing": "error",
            // Enforces a space inside of curly braces
            "@stylistic/jsx/jsx-curly-spacing": ["error", { "when": "always"}],
            // Enforces spaces around the equal sign
            "@stylistic/jsx/jsx-equals-spacing": ["error", "always"],
            // Disallow multiple spaces between inline JSX props
            "@stylistic/jsx/jsx-props-no-multi-spaces": "error",
            // Rule checks the whitespace inside and surrounding the JSX syntactic elements.
            "@stylistic/jsx/jsx-tag-spacing": 
            [
                "error", 
                {
                    "closingSlash": "never",
                    "beforeSelfClosing": "always",
                    "afterOpening": "never",
                    "beforeClosing": "allow"
                }
            ],

            // -- LINE BREAKS --

            // Enforce a newline after the opening brace of JSX elements except for singleline
            "@stylistic/jsx/jsx-curly-newline": ["error", { "multiline": "require", "singleline": "forbid" }],
            // The first property should always be placed on a new line when the JSX tag takes up multiple lines
            "@stylistic/jsx/jsx-first-prop-new-line": ["error", "multiline"],
            // Each JSX element as an argument has a line break before and after it
            "@stylistic/jsx/jsx-function-call-newline": ["error", "multiline"],
            // Require or prevent a new line after jsx elements and expressions
            "@stylistic/jsx/jsx-newline": ["error", { "prevent": true, "allowMultilines": true }],
            // Disallow missing parentheses around multiline JSX.
            "@stylistic/jsx/jsx-wrap-multilines": 
            [
                "error", 
                {
                    "declaration": "parens",
                    "assignment": "parens",
                    "return": "parens",
                    "arrow": "parens",
                    "condition": "ignore",
                    "logical": "ignore",
                    "prop": "ignore",
                    "propertyValue": "ignore"
                }
            ],

            // -- BRACKETS --

            // Enforce the closing bracket location for JSX multiline elements
            "@stylistic/jsx/jsx-closing-bracket-location": "error",
            // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes.
            "@stylistic/jsx/jsx-curly-brace-presence": ["error", { props: "always", children: "always" }],

            // -- INDENT --

            // Enforce props indentation in JSX
            "@stylistic/jsx/jsx-indent-props": ["error", 4],
        },
    },
    
    // Base TypeScript, https://typescript-eslint.io/rules/?=strict
    ...tseslint.configs.strictTypeChecked,
    
    // Custom TypeScript
    {
        name:"TypeScriptCustom",

        rules:
        {
            // Use no-unused-vars from TypeScript
            "no-unused-vars": "off",
            
            "@typescript-eslint/no-unused-vars": 
            [
                "warn", 
                {
                    "argsIgnorePattern": "_", 
                    "varsIgnorePattern": "_", 
                    "caughtErrorsIgnorePattern": "_"
                }
            ],
            // Strongly recommended to use TypeScript rule instead (enabled by default)
            "no-undef": "off",
        },
    },

    // Settings React
    {
        name: "ReactSettings",
        "settings": 
        {
            "react": 
            {
              "createClass": "createReactClass", // Regex for Component Factory to use,
                                                 // default to "createReactClass"
              "pragma": "React",  // Pragma to use, default to "React"
              "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
              "version": "detect", // React version. "detect" automatically picks the version you have installed.
                                   // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                                   // Defaults to the "defaultVersion" setting and warns if missing, and to "detect" in the future
              "defaultVersion": "", // Default React version to use when the version you have installed cannot be detected.
                                    // If not provided, defaults to the latest React version.
              "flowVersion": "0.53" // Flow version
            },
            "propWrapperFunctions": 
            [
                // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
                "forbidExtraProps",
                {"property": "freeze", "object": "Object"},
                {"property": "myFavoriteWrapper"},
                // for rules that check exact prop wrappers
                {"property": "forbidExtraProps", "exact": true}
            ],
            "componentWrapperFunctions": 
            [
                // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
                "observer", // `property`
                {"property": "styled"}, // `object` is optional
                {"property": "observer", "object": "Mobx"},
                {"property": "observer", "object": "<pragma>"} // sets `object` to whatever value `settings.react.pragma` is set to
            ],
            "formComponents": 
            [
              // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
              "CustomForm",
              {"name": "SimpleForm", "formAttribute": "endpoint"},
              {"name": "Form", "formAttribute": ["registerEndpoint", "loginEndpoint"]}, // allows specifying multiple properties if necessary
            ],
            "linkComponents": 
            [
              // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
              "Hyperlink",
              {"name": "MyLink", "linkAttribute": "to"},
              {"name": "Link", "linkAttribute": ["to", "href"]}, // allows specifying multiple properties if necessary
            ]
          }
    },
    
    // Base React
    {
        name: "ReactBase",
        rules: { ...react.configs.flat.recommended.rules },
    },

    // Custom React
    {
        name: "ReactCustom",
        rules:
        {
            // Same as react/jsx-runtime, if new JSX transform from React 17 is used then needed
            "react/react-in-jsx-scope": 0,
            "react/jsx-uses-react": 0,            
        }
    },

    // React Hooks
    {
        name: "ReactHooks",
        rules: { ...reacthooks.configs.recommended.rules }
    },

    // React Perf
    {
        name: "ReactPerf",
        rules: { ...reactPerf.configs.recommended.rules }
    },

    // React Refresh
    {
        name: "ReactRefresh",
        rules:
        {
            "react-refresh/only-export-components": ["error", { "allowExportNames": ["metadata"] } ]
        }
    },

    // Next.js configuration
    {
        name: "Next",
        rules:
        {
            ...eslintNext.configs.recommended.rules,
			...eslintNext.configs["core-web-vitals"].rules,
        }
    },

    // Depend configuration
    {
        name: "Depend",
        rules: { ...depend.configs['flat/recommended'].rules },
        //...depend.configs['flat/recommended'],
        //rules: { depend.configs['flat/recommended'] },
    },
   
    // Unicorn configuration
    {
        name: "UnicornBase",
        rules: { ...unicorn.configs['flat/recommended'].rules },
    },
    
    // Custom Unicorn configuration
    {
        name: "UnicornCustom",
        rules:
        {
            // Filenames should be PascalCase except for next-env.d.ts and src/app folder
            "unicorn/filename-case": ["error", { "case": "pascalCase", "ignore": ["next-env.d.ts", "layout.tsx", "page.tsx", "next.config.ts"] }],
            // Disables error for next-env.d.ts
            "unicorn/prevent-abbreviations": ["error", {"ignore": ["next-env"]}],
            // Disables error for null, not feasable because some react functions like useRef expect null
            "unicorn/no-null": "off",
        }
    },

    // no-unsanitized
    {
        name: "NoUnsanitized",
        rules:
        {
            // Throws error if any user input is inserted unsanitized into the DOM 
            // foo.innerHTML = input.value;
            // bar.innerHTML = "<a href='" + url + "'>About</a>";
            "no-unsanitized/method": "error",
            "no-unsanitized/property": "error",
        }
    },

    // Settings TailwindCSS
    {
        name: "TailwindSettings",
        settings: 
        {
            tailwindcss: 
            {
              // These are the default values but feel free to customize
              callees: ["classnames", "clsx", "ctl"],
              config: "./Config/Styling/tailwind.config.ts", // returned from `loadConfig()` utility if not provided
              cssFiles: [
                "**/*.css",
                "!**/node_modules",
                "!**/.*",
                "!**/dist",
                "!**/build",
              ],
              cssFilesRefreshRate: 5_000,
              removeDuplicates: true,
              skipClassAttribute: false,
              whitelist: [],
              tags: [], // can be set to e.g. ['tw'] for use in tw`bg-blue`
              classRegex: "^class(Name)?$", // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
            },
        },
    },

    // Base TailwindCSS
    {
        name: "Tailwind",
        rules: { ...tailwindCSS.configs.recommended.rules },
    },

    // Custom TailwindCSS
    {
        name: "TailwindCustom",
        rules:
        {
            "tailwindcss/no-arbitrary-value": "error",
        }
    },

    // Security
    {
        name: "Security",
        rules: { ...security.configs.recommended.rules },
    },

    // Custom Security
    {
        name: "SecurityCustom",
        rules:
        {
            // Turn off base rule, too many false positives
            "security/detect-object-injection": "off",
        }
    },

    // Vitest
    {
        name: "Vitest",
        rules: { ...vitest.configs.recommended.rules },
    },
];