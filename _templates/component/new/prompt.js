const { Select } = require('enquirer');

const selectPrompt = new Select({
  type: 'list',
  choices: ['atoms', 'molecules', 'organisms', 'templates', 'pages'],
  name: 'directory',
  message: `What's atomic directory?`,
});

module.exports = {
  prompt: ({ prompter, args }) =>
    selectPrompt.run().then(async directory => {
      const value = await prompter.prompt({
        type: 'input',
        name: 'name',
        message: "What's the name of the component?",
      });
      return { ...value, directory };
    }),
};
