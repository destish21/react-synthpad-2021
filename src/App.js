import { AppProvider } from './context'
import ScaleSelector from './components/scale-selector'
import Layout from './components/layout'
import Synth from './components/synth'

function App() {
  return (
    <AppProvider>
      <Synth />
      <Layout>
        <ScaleSelector />
      </Layout>
    </AppProvider>
  );
}

export default App;
