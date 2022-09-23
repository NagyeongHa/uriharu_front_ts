export interface DiaryInfo {
  title: string;
  writer: string;
  nickname: string;
  contents: string;
  dno: number;
  moddate: Date;
  regdate: Date;
  replylist: null;
  yyyymmdd: string;
}

export interface MypageDiary {
  idx?: number;
  title: string;
  contents: string;
  yyyymmdd: string;
  dno?: number;
}
