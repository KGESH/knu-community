import { Category } from '../../models/category';
import { CategoriesResponse } from '../../api-interfaces/response/category/category.interface';

export const getMockCategories = () => {
  const mockCategories: Category[] = [
    { id: '1', name: '자유게시판', children: [], parentId: '' },
    { id: '2', name: '유머게시판', children: [], parentId: '' },
    { id: '3', name: '자치구역', children: [], parentId: '' },
    { id: '4', name: '코드리뷰', children: [], parentId: '' },
  ];

  const mockResult: CategoriesResponse = {
    data: mockCategories,
    message: 'this is mock result',
    status: 200,
  };

  return Promise.resolve(mockResult);
};
