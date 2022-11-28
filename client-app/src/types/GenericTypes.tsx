interface GenericProps {
  headerToken: string;
}

interface Image {
  title: string;
  description: string;
  keywords: Array<string>;
  author: string;
  creator: string;
  captureDate: string;
  storageDate: string;
  base64: string;
}

export type { GenericProps, Image };
