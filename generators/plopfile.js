/**
 * @param {import('plop').NodePlopAPI} plop
 */
module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/component/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/types.ts',
        templateFile: 'templates/component/types.ts.hbs',
      },
    ],
  });
  plop.setGenerator('page', {
    description: 'Create Page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/app/{{pascalCase name}}/layout.tsx',
        templateFile: 'templates/createPage/layout.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/app/{{pascalCase name}}/page.tsx',
        templateFile: 'templates/createPage/page.tsx.hbs',
      },
    ],
  });
};
