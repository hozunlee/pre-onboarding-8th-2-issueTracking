// import Mark from './Mark';
// import AddMarkInput from './MarkInput';

const Book = ({ title = '', issue = {} }) => {
  console.log('🚀 ~ file: Book.tsx:27 ~ Book ~ issue', issue);
  // console.log('🚀 ~ file: Book.tsx ~ line 6 ~ Book ~ book', book);
  // const { addMarkItem } = useBooks();
  const onSubmitHandler = (BookId) => {
    addMarkItem(BookId);
  };

  return (
    <>
      <div className=" bg-one-red my-3 mx-2 box-border h-fit max-h-full w-48 border border-solid shadow-lg">
        <div className="m-2 mb-3 items-center text-center justify-between text-xl font-bold text-slate-600">
          <div>{title}</div>
        </div>
        {/* {book.marks.length ? (
          book.marks.map((mark) => <Mark key={mark.id} mark={mark} />)
        ) : (
          <hr className='border-3 mt-0 mb-3 border-white' />
        )}
        <AddMarkInput onSubmitHandler={() => onSubmitHandler(book.id)} /> */}
      </div>
    </>
  );
};

export default Book;
