interface GenericProps {
  headerToken: string;
}

interface Image {
  id: number;
  title: string;
  description: string;
  keywords: Array<string>;
  author: string;
  creator: string;
  captureDate: Object;
  storageDate: Object;
  base64: string;
}

export type { GenericProps, Image };
