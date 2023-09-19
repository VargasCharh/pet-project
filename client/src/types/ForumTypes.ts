export type PostType = {
  id:        number;
  title:     string;
  body:      string;
  companyId: number;
  userId:    number;
  createdAt: Date;
  updatedAt: Date;
  Comments:  CommentType[];
  User:      UserForumType;
  Company:   CompanyType;
}

export type CommentType = {
  id:        number;
  body:      string;
  postId:    number;
  userId:    number;
  createdAt: Date;
  updatedAt: Date;
  User:      UserForumType;
}

export type UserForumType  = {
  id:     number;
  name:   string;
  email:  string;
  avatar: string
}

export type CompanyType = {
  id:        number;
  name:      string;
  img:       string;
}

export type PostFormType = {
  title:     string;
  body:      string;
  companyId: number;
}

export type CommentFormType = {
  body: string
  postId: number
}

export type ForFileType = {
  file: HTMLInputElement & { files: FileList }; 
}
