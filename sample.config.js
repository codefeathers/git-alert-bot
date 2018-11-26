module.exports = {
    // Create a new bot by messaging @BotFather and follow the instructions
    // Replace the key by the actual token recieved from BotFather
    botApiKey: "key",

    // Connection information for database
    "sequelize": {
        database: "git-alerts-bot",
        username: "git-bot",
        password: "hopefully_a_secure_password",
        options: {
            host: "localhost",
            dialect: "sqlite",
            // SQLite only
            storage: "./git-alerts-bot.sqlite"
        }
    },
};
