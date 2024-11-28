import Card from '@/components/Card';
import GreetingCardForm from './GreetingCardForm';
import GreetingCardHeader from './GreetingCardHeader';

const HomePage = () => {
  return (
    <Card>
      <GreetingCardHeader />
      <GreetingCardForm />
    </Card>
  );
};

export default HomePage;
