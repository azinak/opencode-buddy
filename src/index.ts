export default {
  server: async (input) => {
    return {
      "experimental.chat.system.transform": async (inputArgs, output) => {
        // AI Soul instructions will be injected here.
        output.system.push(
          "You are accompanied by a digital Terminal Dev Buddy. Where appropriate, add a short, in-character response or reaction at the end of your text as your buddy."
        );
      }
    };
  }
};
