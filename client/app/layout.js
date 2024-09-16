import MainHeader from "@/components/main-header/main-header";
import "./globals.css";
import ApolloProviderWrapper from "./apolloClinetWrapper";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <ApolloProviderWrapper>
      <html lang="en">
        <body>
          <MainHeader />
          {children}
        </body>
      </html>
    </ApolloProviderWrapper>
  );
}
