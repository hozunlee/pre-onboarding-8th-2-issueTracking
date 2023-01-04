// import Book from '../components/Book';

import Book from '../components/Book';

import { issueStore } from '../hooks/store';

const issueProcess = [
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

  return (
    <div className="flex h-screen items-start bg-sub p-4">
      <div className="flex justify-around w-full">
        {issueProcess.map((item) => {
          const selectIssue = IssueData.filter((issue) => item.id === issue.id);
          // console.log('selectIssue', item.id, selectIssue);
          return (
            <div key={item.id}>
              <Book title={item.title} issue={selectIssue} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
