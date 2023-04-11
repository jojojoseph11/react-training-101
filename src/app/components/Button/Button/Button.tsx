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

export default function Button(props: Props) {
  const first = props.first;
  const last = props.last;
  if (props.enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }
  return (
    <h1>
      Hello {first} {last} , {getExclamationMarks(props.enthusiasmLevel)}
    </h1>
  );
}
