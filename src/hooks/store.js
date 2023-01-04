import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const SampleData = [
  {
    id: 0, // 고유번호
    title: 'Title', // 제목
    content: 'ddd', // 내용
    deadDate: '2022-01-06', //마감일
    status: 0, // 상태
    who: '김별이',
  },
];

const issueStore = create(
  devtools(
    persist(
      (set, get) => ({
        IssueData: SampleData, //state
        setIssueData: (newIssue) =>
          set((state) => ({ IssueData: [...state.IssueData, newIssue] })),
        resetUserInfo: () => {
          set((state) => ({ userInfo: null }));
          sessionStorage.removeItem('login-storage');
        },
      }),
      {
        name: 'issue-storage', // name of item in the storage (must be unique)
        // getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
      }
    )
  )
);

// redux devtools 사용하기
// const useStore = create(devtools(myStore));

export { issueStore };
