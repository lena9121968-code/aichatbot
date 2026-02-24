
export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  url: string;
  isNew?: boolean; // Nhãn đánh dấu biểu mẫu mới
}

export interface AppNotification {
  id: string;
  title: string;
  content: string;
  date: string;
  isImportant?: boolean;
}

export enum DepartmentAction {
  LEAVE_REQUEST = 'Nghỉ phép',
  RECRUITMENT = 'Tuyển dụng',
  PROCEDURE = 'Thủ tục HC',
  DOCUMENT_TEMPLATE = 'Biểu mẫu',
  INSURANCE = 'Bảo hiểm/Lương'
}
