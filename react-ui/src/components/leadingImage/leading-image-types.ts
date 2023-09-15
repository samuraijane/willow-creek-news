export interface LeadingImageProps {
  alt: string;
  caption: string;
  date: string;
  type: LeadingImageType;
  url: string;
}

enum LeadingImageType {
  PHOTO = "photo"
}