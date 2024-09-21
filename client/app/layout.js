import MainHeader from "@/components/main-header/main-header";
import "./globals.css";
import ApolloProviderWrapper from "./apolloClinetWrapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <ToastContainer
            position="top-right"
            autoClose={1900}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </body>
      </html>
    </ApolloProviderWrapper>
  );
}
