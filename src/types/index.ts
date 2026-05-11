export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  unit: string;
  moq: number;
  wholesalePrice?: number;
  stock?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Inquiry {
  type: 'wholesale' | 'distributor' | 'export' | 'general';
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  image: string;
  category: string;
  createdAt: string;
}
