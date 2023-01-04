import { useReducer, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IIssue } from '../pages/Main';

interface IProps {
  mark: IIssue;
}

const Mark = ({ mark }: IProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/issue/${mark.id}`, { state: mark })}
      className="group mb-1 box-border cursor-pointer rounded border-2 border-cyan-400 bg-white p-1 hover:bg-gray-50"
    >
      <div>
        <h3 className="m-1 font-medium text-slate-700">
          {mark.id}.{mark.title}
        </h3>
        <p className="m-1 text-sm text-gray-500">{mark.content}</p>
        <p>{mark.deadDate}</p>
        <p>담당자 : {mark.who}</p>
      </div>
    </div>
  );
};

export default Mark;
