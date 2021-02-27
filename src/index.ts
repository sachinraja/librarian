import type { ClientUser } from 'discord.js';
import { CommandoClient } from 'discord.js-commando';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const TOKEN = <string>process.env.TOKEN;

const client = new CommandoClient({
  commandPrefix: 'lib',
  owner: '295014158771159040',
});

client.registry
  .registerDefaultTypes()
  .registerGroups([['search']])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
  const { tag, id } = <ClientUser>client.user;

  console.log(`Logged in as ${tag}: ${id}`);
});

process.on('SIGINT', () => {
  client.destroy();
});
process.on('SIGTERM', () => {
  client.destroy();
});

client.login(TOKEN);
