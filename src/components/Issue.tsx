import { useReducer, useRef } from 'react';
import { IIssue } from '../pages/Main';

interface IProps {
  mark: IIssue;
}

const Mark = ({ mark }: IProps) => {
  console.log('🚀 ~ file: Issue.tsx:4 ~ Mark ~ mark', mark);
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, !mark.id);
  const urlRef = useRef<HTMLInputElement>(null);

  return (
    <div className="group mb-1 box-border cursor-pointer rounded border-2 border-cyan-400 bg-white p-1 hover:bg-gray-50">
      {isEditing ? (
        <>
          <input
            type="text"
            ref={urlRef}
            className="mb-2 w-full rounded p-1.5"
            placeholder="https://...."
          />
        </>
      ) : (
        <div>
          <div></div>
          <h3 className="m-1 font-medium text-slate-700">
            {mark.id}.{mark.title}
          </h3>
          <p className="m-1 text-sm text-gray-500">{mark.content}</p>
          <p>{mark.deadDate}</p>
          <p>담당자 : {mark.who}</p>
        </div>
      )}
      <div className="item-center group-vi mr-3 hidden justify-end group-hover:flex">
        <button
          onClick={() => toggleEditing()}
          className="mb-1 mr-1 rounded-full bg-cyan-400 p-2 hover:bg-cyan-500"
        >
          {/* <PencilSquareIcon className='w-4 text-white' /> */} 수정
        </button>
        <button className="mb-1 rounded-full bg-rose-400 p-2 hover:bg-rose-500">
          {/* <TrashIcon className='w-4 text-white' /> */} 삭제
        </button>
      </div>
    </div>
  );
};

export default Mark;
