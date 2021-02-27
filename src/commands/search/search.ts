import { MessageEmbed } from 'discord.js';
import type { CommandoClient, CommandoMessage } from 'discord.js-commando';
import { Command } from 'discord.js-commando';
import { getProject } from 'librariesApi';
import type { PlatformType } from 'platform';
import { isPlatformType, platformToImage } from 'platform';

export default class SearchCommand extends Command {
  constructor(client: CommandoClient) {
    super(client, {
      name: 'search',
      aliases: [],
      group: 'search',
      memberName: 'search',
      description: 'Search for a project on a variety of platforms.',
      args: [
        {
          key: 'platformName',
          prompt: 'What platform is the project located on?',
          type: 'string',
        },
        {
          key: 'projectName',
          prompt: 'What is the name of the project?',
          type: 'string',
        },
      ],
    });
  }

  async run(
    message: CommandoMessage,
    {
      platformName,
      projectName,
    }: { platformName: string; projectName: string },
  ) {
    const loweredPlatformName = platformName.toLowerCase();

    if (!isPlatformType(loweredPlatformName)) {
      return message.channel.send(
        `${loweredPlatformName} is not a valid platform.`,
      );
    }

    const platformData = platformToImage(<PlatformType>loweredPlatformName);

    const project = await getProject(
      <PlatformType>loweredPlatformName,
      projectName,
    );

    if (!project) {
      const embed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Error')
        .setDescription(`${projectName} not found in ${loweredPlatformName}`);

      return message.channel.send(embed);
    }

    const url =
      project.package_manager_url || project.homepage || project.repository_url;

    const publishedAt = new Date(project.latest_release_published_at);

    const embed = new MessageEmbed()
      .setColor('#00FF00')
      .setTitle(project.name)
      .attachFiles([platformData.image])
      .setThumbnail(`attachment://${platformData.baseImagePath}`);

    if (project.language) embed.addField('Language', project.language, true);

    embed
      .addField('Latest Release', project.latest_release_number, true)
      .addField(
        'Latest Release Published At',
        publishedAt.toLocaleString(),
        true,
      );

    if (project.normalized_licenses && project.normalized_licenses.length > 0)
      embed.addField('Licenses', project.normalized_licenses.join(', '), true);
    if (project.description) embed.addField('Description', project.description);
    if (url) embed.setURL(url);

    return message.channel.send(embed);
  }
}
