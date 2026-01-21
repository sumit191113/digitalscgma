export interface Notice {
  id: number;
  title: string;
  date: string;
  isNew: boolean;
  category: 'Exam' | 'Event' | 'Holiday' | 'General';
}

export interface FacultyMember {
  id: number;
  name: string;
  subject: string;
  qualification: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  category: string;
  caption: string;
}

export interface FeeStructure {
  grade: string;
  admissionFee: number;
  tuitionFee: number;
  annualCharges: number;
}