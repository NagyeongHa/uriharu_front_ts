//추가,수정,삭제 할 때
export interface CommentInfo {
  contents: string;
  dno: number;
  rno?: number;
}

export interface CommentProp {
  comments: CommentItemInfo;
  modifyComment: (commentItem: CommentInfo) => Promise<void>;
  deleteComment: (commentItem: CommentInfo) => Promise<void>;
}

//개별 댓글 속성
export interface CommentItemInfo {
  nickname: string;
  contents: string;
  regdate: string;
  rno: number;
  writer: string;
}
