import './styles.css';
import './assets/sass/index.scss';
import Heading from './components/atoms/Heading/Heading';
export default function App() {
  return (
    <div className="App">
      <Heading Tag="h2" label="label" />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
