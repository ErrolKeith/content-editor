type FeatureFlagEnvironments = "development" | "test" | "prod";

const flags: Record<string, FeatureFlagEnvironments> = {
  calloutblock: "development",
};

export default function useFeatureFlags() {
  const isEnabled = (key: string) => {
    const environment = import.meta.env.MODE;

    if (!flags[key]) {
      return false;
    }

    if (flags[key] === environment) return true;

    return false;
  };

  return { isEnabled };
}
