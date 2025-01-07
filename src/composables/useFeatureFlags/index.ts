type FeatureFlagEnvironments = "development" | "test" | "prod";

const flags: Record<string, FeatureFlagEnvironments> = {
  calloutblock: "development",
};

export default function useFeatureFlags() {
  const flagIsEnabled = (flag: string) => {
    const environment = import.meta.env.MODE;

    if (!flags[flag]) {
      return false;
    }

    if (flags[flag] === environment) return true;

    return false;
  };

  return { flagIsEnabled };
}
