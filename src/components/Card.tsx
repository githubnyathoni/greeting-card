interface CardProps {
  children: React.ReactElement[];
}

function Card({ children }: CardProps) {
  return (
    <div className='w-10/12 md:w-1/2 bg-white shadow-md rounded-lg'>
      {children}
    </div>
  );
}

export default Card;
