// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import Login from './components/login/Login';
import Table from './components/login/Table';
import Car from './components/example/LearnComponent';
import Button from './components/Button/Button/Button';

export function App() {
  const demoOnChange = (event: Event) => {
    console.log('Changed values', event.target.value);
  };
  const myElement = <input onChange={demoOnChange} type="text" />;
  console.log(myElement);
  return (
    <>
      <Button first="Jojo" last="joseph" enthusiasmLevel={3} />

      <Car />
      <div>
        <Login />
      </div>
      <div>
        <Table />
      </div>
      {myElement}
    </>
  );
}

export default App;
