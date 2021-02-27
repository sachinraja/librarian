import axios from 'axios';
import type { PlatformType } from 'platform';

const LIBRARIES_IO_API_KEY = <string>process.env.LIBRARIES_IO_API_KEY;

export async function getProject(
  platformName: PlatformType,
  projectName: string,
): Promise<Project | null> {
  const encodedProjectName = encodeURIComponent(projectName);

  const response = await axios
    .get(
      `https://libraries.io/api/${platformName}/${encodedProjectName}?api_key=${LIBRARIES_IO_API_KEY}`,
    )
    .catch(() => null);

  return !response ? null : response.data;
}

export interface Project {
  name: string;
  description: string;
  language?: string;
  latest_release_number: string;
  latest_release_published_at: string;
  package_manager_url?: string;
  homepage?: string;
  repository_url?: string;
  normalized_licenses?: Array<string>;
}
