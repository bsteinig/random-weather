import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
            colors: {
              gray: [
                "#EFF2F6",
                "#D1DBE6",
                "#B3C4D5",
                "#96ADC5",
                "#7896B5",
                "#5B7FA4",
                "#496683",
                "#364C63",
                "#243342",
                "#121921"
              ],
              red: [
                "#FCEAE8",
                "#F7C5BF",
                "#F29F97",
                "#ED7A6E",
                "#E85445",
                "#E32F1C",
                "#B62516",
                "#881C11",
                "#5B130B",
                "#2D0906"
              ],
              orange: [
                "#FCF2E8",
                "#F8DABF",
                "#F3C196",
                "#EEA96C",
                "#EA9143",
                "#E5791A",
                "#B76115",
                "#894910",
                "#5C310A",
                "#2E1805"
              ],
              yellow: [
                "#FEF9E7",
                "#FBEEBC",
                "#F9E490",
                "#F6D965",
                "#F3CE39",
                "#F1C40E",
                "#C19D0B",
                "#917508",
                "#604E06",
                "#302703"
              ],
              green: [
                "#EAFAF1",
                "#C5F2D8",
                "#9FE9BF",
                "#7AE1A6",
                "#54D98C",
                "#2FD073",
                "#26A65C",
                "#1C7D45",
                "#13532E",
                "#092A17"
              ],
              teal: [
                "#E9FCF8",
                "#C0F6EC",
                "#98F1DF",
                "#70EBD3",
                "#47E6C6",
                "#1FE0BA",
                "#19B395",
                "#138670",
                "#0C5A4A",
                "#062D25"
              ],
              cyan: [
                "#E9F4FB",
                "#C2E0F4",
                "#9BCCED",
                "#74B9E6",
                "#4DA5E0",
                "#2691D9",
                "#1F74AD",
                "#175782",
                "#0F3A57",
                "#081D2B"
              ],
              blue: [
                "#E9F4FB",
                "#C2E0F4",
                "#9BCCED",
                "#74B9E6",
                "#4DA5E0",
                "#2691D9",
                "#1F74AD",
                "#175782",
                "#0F3A57",
                "#081D2B"
              ],
              violet: [
                "#F4EDF7",
                "#E1CDE9",
                "#CEAEDB",
                "#BB8ECD",
                "#A86EBF",
                "#944EB1",
                "#773E8E",
                "#592F6A",
                "#3B1F47",
                "#1E1023"
              ],
              primary: [
                "#b3cce5",
                "#9ebede",
                "#8db2d8",
                "#7aa6d2",
                "#417fbe",
                "#3a73ab",
                "#346698",
                "#2d5985",
                "#274c72",
                "#1a334c"
              ],
            },
            primaryShade: 5,
            primaryColor: "primary",
            defaultRadius: "md",
            colorScheme: "light",
            activeStyles: {
              transform: "scale(0.95)"
            },
            fontFamily: "Inter, san-serif"
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
