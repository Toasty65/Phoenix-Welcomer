module.exports = {
  createWelcomeEmbed: (member) => {
    return {
      title: "A new user joined the server!",
      color: '0x4BB543',
      thumbnail: {
        url: member.user.displayAvatarURL(),
      },
      fields: [
        {
          name: "\u200b",
          value: "\u200b",
          inline: true,
        },
        {
          name: "Welcome " + "`" + member.displayName + "`" + "!",
          value: 'Be respectful and polite & enjoy your stay!',
          inline: true,
        },
        {
          name: "\u200b",
          value: "\u200b",
          inline: true,
        },
      ],
      footer: {
        text: "Joined:",
      },
      timestamp: new Date(),
    };
  },

  createLeaveEmbed: (member) => {
    return {
        title: "A user left the server!",
        color: '0xFC100D',
        thumbnail: {
          url: member.user.displayAvatarURL(),
        },
        fields: [
          {
            name: "\u200b",
            value: "\u200b",
            inline: true,
          },
          {
            name: "Goodbye " + "`" + member.displayName + "`" + "!",
            value: 'It was nice having you as a member',
            inline: true,
          },
          {
            name: "\u200b",
            value: "\u200b",
            inline: true,
          },
        ],
        footer: {
          text: "Left:",
        },
        timestamp: new Date(),
      };
  },
};
