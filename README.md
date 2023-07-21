## A general way to set up husky eslint prettier

npm init @eslint/config
npm i prettier -D
npm i -D eslint-config-prettier
npx mrm@2 lint-staged

need to set the path of the tsconfig file in eslintrc: "project": ["./tsconfig.json"]