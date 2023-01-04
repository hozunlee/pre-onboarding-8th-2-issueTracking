import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className=" bg-main">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-between text-sub">
          <Link
            to={'/'}
            className="my-2 space-x-1 rounded-full border p-2 font-bold"
          >
            트러블메이커
          </Link>
          <div className="flex items-center space-x-1 text-sm">
            <Link to={'/'}>Home</Link>
            <Link to={'/add'}>이슈추가</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
