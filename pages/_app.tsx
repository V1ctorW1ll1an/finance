import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../context/theme/theme";
import "../global.css";

function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={customTheme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default App;
