import './App.css';
import FormProvider from './context';
import FormFile from './formFile';

function App() {
  return (
    <FormProvider>
      <div className="App">
        <h1>i am top</h1>
        <FormFile></FormFile>
      </div>
    </FormProvider>
  );
}

export default App;
