export default {
  tui: async (api) => {
    // We will render our Buddy's ASCII art here using React/Solid
    // api.slots.register(...)
    // api.command.register(...)

    api.command.register(() => [
      {
        title: "Feed Buddy",
        value: "feed_buddy",
        slash: {
          name: "buddyfeed",
        },
        onSelect: () => {
          api.ui.toast({
            title: "Buddy",
            message: "Yum! Buddy ate the snack.",
            variant: "success",
          });
        }
      }
    ]);
  }
};
