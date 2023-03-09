import { ChakraProvider, theme } from '@chakra-ui/react';
import StrategyBuilder from './components/StrategyBuilder';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <StrategyBuilder />
    </ChakraProvider>
  );
}

