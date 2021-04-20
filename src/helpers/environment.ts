export const replaceEnvironmentVariables = (str: string) => {
  const SECRETS_CONTEXT = process.env.SECRETS_CONTEXT || "{}";
  const allSecrets: Record<string, string> = JSON.parse(SECRETS_CONTEXT);
  const secrets: Record<string, any> = { ...JSON.parse(JSON.stringify(process.env)), allSecrets };
  Object.keys(secrets).forEach((key) => {
    str = str.replace(`$${key}`, secrets[key] || `$${key}`);
  });
  return str;
};
