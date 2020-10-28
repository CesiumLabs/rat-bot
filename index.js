require("dotenv").config();

const Eris = require("eris");

/* Actual Client */
if (!process.env.DISCORD_TOKEN) throw new Error("No DISCORD_TOKEN was found!");
const client = new Eris.CommandClient(process.env.DISCORD_TOKEN, null, {
	description: "Snowflake Studio's Helper",
	prefix: ["@mention", "-"],
	owner: "Pog Champ",
});

/* Commands */
client.registerCommand(
	"ping",
	async (message, args) => {
		const start = Date.now();
		const msg = await message.channel.createMessage("Pinging...");
		msg.edit(`Pong! \`${Date.now() - start}ms\``);
	},
	{
		aliases: ["pong"],
	}
);

/* Events */
client.on("ready", () => console.log("I'm ready!"));

/* Connect to Discord API */
client.connect();
