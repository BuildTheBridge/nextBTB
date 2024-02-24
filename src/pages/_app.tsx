import "@/styles/globals.css";
import theme from "@/theme";
import { ThemeProvider, styled } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode, useState } from "react";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export default function BtbApp(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: 3,
          },
        },
      })
  );

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=divice-width"
            />
            {/* 추가폰트 */}
          </Head>
          <main>
            {getLayout(<Component {...pageProps} />)}
            <ReactQueryDevtools initialIsOpen={false} position={"left"} />
            <ToastST
              position="top-right"
              hideProgressBar
              icon={false}
              autoClose={2000}
              closeButton={true}
              closeOnClick={false}
              draggable={false}
              limit={3}
            />
          </main>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

const ToastST = styled(ToastContainer)(() => {
  return {
    "& .Toastify__toast-body": {
      margin: "0px",
      padding: "0px",
    },
    "& .Toastify__toast--success": {
      color: "white",
      fontWeight: 400,
      fontSize: "14px",
      minHeight: "10px",
      padding: "12px 16px",
      borderRadius: "12px",
      backgroundColor: "#3bbf7b",
    },
    "& .Toastify__toast--error": {
      color: "white",
      fontWeight: 400,
      fontSize: "14px",
      minHeight: "10px",
      borderRadius: "12px",
      padding: "12px 16px",
      backgroundColor: "#FA6561",
    },
    "& .Toastify__toast--warning": {
      color: "white",
      fontWeight: 400,
      fontSize: "14px",
      minHeight: "10px",
      borderRadius: "12px",
      padding: "12px 16px",
      backgroundColor: "#FFB330",
    },
    "& .Toastify__toast--info": {
      color: "white",
      fontWeight: 400,
      fontSize: "14px",
      minHeight: "10px",
      borderRadius: "12px",
      padding: "12px 16px",
      backgroundColor: "#6cb1ff",
    },
  };
});
