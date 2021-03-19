import React, {useEffect} from 'react';
import {PageHeader} from "../common/PageHeader";
import {Container} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {loadCategories, selectAllCategories} from './CategorySlice'
import {RootState} from "../../app/store";

interface Category {
  id: number;
  name: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
}

export const CategoryList = () => {

  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.categories.loading);
  const error = useSelector((state: RootState) => state.categories.error);
  const categories = useSelector(selectAllCategories)

  useEffect(() => {
    dispatch(loadCategories())
  }, []);

  let content = null;

  if (error) {
    content = <p>Some error...</p>;
  }

  if (loading) {
    content = <p>Loading...</p>;
  }

  if (categories && categories.length > 0) {
    content = (
      <ul>
        {
          categories.map(item => {
            const category = item as Category;
            return <li
              key={category.id}
            >{category.name} -> {category.created_at}</li>
          })
        }
      </ul>
    );
  }

  return (
    <>
      <PageHeader title="Categories"/>
      <Container>
        {content}
      </Container>
    </>
  );
};
