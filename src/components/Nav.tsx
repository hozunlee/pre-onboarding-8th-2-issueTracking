const Nav = () => {
  return (
    <nav className=" bg-main">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-between text-sub">
          <div className="my-2 space-x-1 rounded-full border p-2 font-bold">
            트러블메이커
          </div>
          <div className="flex items-center space-x-1 text-sm">
            {/* <a href={() => false} className="py-5 px-3">
              검색
            </a>
            <a href={() => false} className="py-5 px-3">
              Sign in
            </a>
            <a
              href={() => false}
              className="hover:bg-grey-200 rounded bg-sub py-2 px-3 text-main transition duration-300 hover:text-blue-600"
            >
              Sign up
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
