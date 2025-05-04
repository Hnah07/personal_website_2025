declare module "next-themes" {
  export interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: string;
    enableSystem?: boolean;
    attribute?: string;
  }

  export function ThemeProvider(props: ThemeProviderProps): JSX.Element;

  export function useTheme(): {
    theme: string | undefined;
    setTheme: (theme: string) => void;
    resolvedTheme: string | undefined;
    themes: string[];
    systemTheme: string | undefined;
  };
}
