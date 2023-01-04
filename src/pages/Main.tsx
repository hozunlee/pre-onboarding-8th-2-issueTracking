// import Book from '../components/Book';

import Book from '../components/Book';

import { issueStore } from '../hooks/store';

export interface IIssue {
  id: number; // 고유번호
  title: string; // 제목
  content: string; // 내용
  deadDate: number; //마감일
  status: number; // 상태
  who: string;
}

export interface IIssueProcess {
  id: number;
  title: string;
}

export const issueProcess: IIssueProcess[] = [
  {
    id: 0,
    title: '할 일',
  },
  {
    id: 1,
    title: '진행 중',
  },
  {
    id: 2,
    title: '완료',
  },
];

const Home = () => {
  const { IssueData } = issueStore();
  console.log('🚀 ~ file: Main.tsx:38 ~ Home ~ IssueData', IssueData);

  return (
    <div className="flex h-screen items-start bg-sub p-4">
      <div className="flex justify-around w-full">
        {issueProcess.map((item) => {
          const selectIssue = IssueData.filter(
            (issue: IIssue) => item.id === issue.status
          );
          // console.log('selectIssue', item.id, selectIssue);
          return (
            <div key={item.id}>
              <Book item={item} issue={selectIssue} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
