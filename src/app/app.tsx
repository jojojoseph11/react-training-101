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
  const data = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'orange' },
    { id: 3, name: 'blueberry' },
    { id: 4, name: 'banana' },
    { id: 5, name: 'kiwi' },
  ];

  return (
    <>
      {/* <Button fruits={data} /> */}

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
