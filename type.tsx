export interface IClient {
  ID: string;
  post_title: string;
  client_name_key: string;
  client_name_value: string;
  client_photo_key: string;
  client_photo_value: string;
  client_photo_url: string;
  client_email_key: string;
  client_email_value: string;
}

export interface IProduct {
  ID: string;
  product_name: string;
  price_key: string;
  price_value: string;
  description_key: string;
  description_value: string;
  category_key: string;
  category_value: string;
  project_id_key: string;
  project_id_value: string;
}

export interface IRenameProduct {
  id: string;
  productName: string;
  price: string;
  description: string;
  category: string;
  projectId: string;
}

export interface IProject {
  projectId: string;
  projectTitle: string;
  projectDate: string;
  clientName: string;
  title: string;
  completionDate: string;
}

export type ProjectById = {
  project_id: string;
  title: string;
  client_name: string;
  completion_date: string;
};

export type FilterType =
  | "All"
  | "Development"
  | "Security"
  | "Support"
  | "Analytics"
  | "Infrastructure";
