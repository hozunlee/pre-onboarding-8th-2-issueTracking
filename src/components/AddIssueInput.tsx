import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { issueStore } from '../hooks/store';

import { issueProcess } from '../pages/Main';

const whoList = ['이호준', '이혜미', ' 김별이', '김만중', '이호열'];

// const AddIssueInput = ({ onSubmitHandler }) => {
const AddIssueInput = () => {
  const { setIssueData, IssueData } = issueStore();

  const navigate = useNavigate();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const [whoKeyword, setWhoKeyword] = useState<string[]>([]);
  const [newWho, setNewWho] = useState<string>();
  const [newStatus, setNewStatus] = useState<number>();

  const BUTTONDISABLED = newWho && newStatus;

  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    const keyword = e.currentTarget.value;
    if (keyword.length >= 2) {
      const temp = whoList.filter((who) => who.toLowerCase().includes(keyword));
      setWhoKeyword(temp);
    }
    // setWhoKeyword(e.currentTarget.value);
  };

  const onSubmit = () => {
    let newIssue = {};
    if (titleRef.current) {
      newIssue = {
        id: IssueData.length ? IssueData[IssueData.length - 1].id + 1 : 0,
        title: titleRef?.current?.value,
        content: contentRef?.current?.value,
        deadDate: dateRef?.current?.value,
        who: newWho,
        status: newStatus,
      };
    }

    console.log('newIssue :>> ', newIssue);
    setIssueData(newIssue);
    // onSubmitHandler(inputRef.current?.value);
    // if (inputRef.current?.value) {
    //   inputRef.current.value = '';
    // }
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col m-10">
        <input
          className="my-1 w-full"
          type="text"
          placeholder="제목을 입력하세요"
          ref={titleRef}
        />
        <label htmlFor="content">
          <textarea
            name=""
            id="content"
            placeholder="내용을 입력하세요"
            ref={contentRef}
          ></textarea>
        </label>
        <label htmlFor="deadDate">
          마감일
          <input type="datetime-local" ref={dateRef} />
        </label>
        <label htmlFor="deadDate">
          담당자
          <input onChange={onChangeData} />
        </label>
        <select
          onChange={(e) => {
            setNewWho(e.target.value);
          }}
        >
          <option value="">담당자를 선택하세요</option>
          {whoKeyword &&
            whoKeyword.map((item, i) => {
              return (
                <option key={i} value={item}>
                  {item}
                </option>
              );
            })}
        </select>
        <select
          onChange={(e) => {
            setNewStatus(Number(e.target.value));
          }}
        >
          <option value="">상태를 선택하세요</option>
          {issueProcess.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            );
          })}
        </select>
        <button
          type="submit"
          onClick={onSubmit}
          className="border bg-gray-100"
          disabled={!BUTTONDISABLED}
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default AddIssueInput;
