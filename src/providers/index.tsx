import { ReactNode } from "react";
import { UseLanguageProvider } from "../hooks/useLanguage";

interface ProvidersProps {
  children: ReactNode;
}
export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <UseLanguageProvider>{children}</UseLanguageProvider>;
};
