type Category = {
  id: string;
  name: string;
  photo?: string;
};

type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

type Operation = Cost | Profit;

type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

// Функция для генерации случайного идентификатора
const generateRandomId = () => Math.random().toString(36).substring(2, 15);

// Функция для генерации случайного названия
const generateRandomName = () => `Name-${Math.random().toString(36).substring(2, 7)}`;

// Функция для генерации случайной категории
const generateRandomCategory = (): Category => ({
  id: generateRandomId(),
  name: generateRandomName(),
  photo: `https://example.com/photo/${generateRandomId()}.jpg`
});

// Создание случайного продукта
export const createRandomProduct = (createdAt: string): Product => {
  const category = generateRandomCategory();
  const productName = generateRandomName();
  return {
    id: generateRandomId(),
    name: productName,
    photo: `https://example.com/photo/${generateRandomId()}.jpg`,
    desc: productName + ' description',
    createdAt,
    price: Math.random() * 100,
    oldPrice: Math.random() > 0.5 ? Math.random() * 100 : undefined,
    category
  };
};

// Создание случайной операции
export const createRandomOperation = (createdAt: string): Operation => {
  const category = generateRandomCategory();
  const isCost = Math.random() > 0.5;
  const categoryName = generateRandomName();
  return {
    id: generateRandomId(),
    name: categoryName,
    desc: categoryName + ' description',
    createdAt,
    amount: Math.random() * 1000,
    category,
    type: isCost ? 'Cost' : 'Profit'
  };
};
