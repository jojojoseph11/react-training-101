import React from 'react';
import getExclamationMarks from './helper';

interface Props {
  first: string;
  last: string;
  enthusiasmLevel: number;
}

// Button.propTypes = {
//   first: PropTypes.string.isRequired,
// };

interface State {
  currentEnthusiasm: number;
}

// function FruitListItem(props) {
//   function handleClick(e, id) {
//     console.log(e);
//     console.log(`removed ${id}`);
//   }

//   return (
//     <li onClick={(e) => handleClick(e, props.fruit.id)}>{props.fruit.name} </li>
//   );
// }

export default function Button(props: Props) {
  const first = props.first;
  const last = props.last;
  if (props.enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }
    console.log('PROP', props);
    // const fruitListItems = props.fruits.map((fruit) => (
    //   <FruitListItem key={fruit.id} fruit={fruit} />
    // ));
  return (
    <>
     {/* <ul>{fruitListItems}</ul>; */}
      <h1>
        Hello {first} {last} , {getExclamationMarks(props.enthusiasmLevel)}
      </h1>
    </>
  );
}
