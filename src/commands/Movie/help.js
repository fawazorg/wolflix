const WOLF = require("wolf.js");
const { api } = require("../../../bot");

const COMMAND_TRIGGER = `${api.config.keyword}_command_help`;
const COMMAND_RESPONSE = `${api.config.keyword}_movie_help_message`;

MovieHelp = async (api, command) => {
  await api
    .messaging()
    .sendMessage(
      command,
      api.phrase().getByLanguageAndName(command.language, COMMAND_RESPONSE)
    );
};

module.exports = new WOLF.Command(COMMAND_TRIGGER, {
  both: (command) => MovieHelp(api, command),
});
