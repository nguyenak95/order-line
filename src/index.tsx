import { ChakraProvider } from "@chakra-ui/react"
import { StrictMode } from "react"
import * as ReactDOMClient from "react-dom"

import App from "./App"

ReactDOMClient.render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
)
