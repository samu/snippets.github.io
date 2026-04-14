export const releaseVersion = "0.19.0";

const releaseTag = `v${releaseVersion}`;
const releaseBaseUrl = `https://github.com/samu/snippets/releases/download/${releaseTag}`;

export function getReleaseAssetUrl(assetName: string) {
  return `${releaseBaseUrl}/Snippets-${releaseVersion}${assetName}`;
}
