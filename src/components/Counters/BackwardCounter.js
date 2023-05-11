import Card from '../UI/Card';
import useCounter from '../../hooks/use-counter';

const BackwardCounter = () => {
  const forward = false;
  const counter = useCounter(forward);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
