const WOLF = require("wolf.js");
const { api } = require("../../bot");

const COMMAND_TRIGGER = `${api.config.keyword}_command_help`;
const COMMAND_RESPONSE = `${api.config.keyword}_global_help_message`;

Help = async (api, command) => {
  await api
    .messaging()
    .sendMessage(
      command,
      api.phrase().getByLanguageAndName(command.language, COMMAND_RESPONSE)
    );
};

module.exports = new WOLF.Command(COMMAND_TRIGGER, {
  both: (command) => Help(api, command),
});
