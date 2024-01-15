import { People } from './app/People/People';

export const App: React.FC = () => {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>People</h1>
      <People />
    </>
  );
};
