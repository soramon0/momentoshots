import Navbar from './Navbar';

const Page: React.FC = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      {children}
    </div>
  );
};

export default Page;
