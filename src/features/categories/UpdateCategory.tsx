import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Container} from "reactstrap";
import {useParams} from "react-router-dom";
import {UpdateCategoryParams} from "./CategoryModels";
import {selectCategoryById, updateCategory} from "./CategorySlice";
import {PageHeader} from "../common/PageHeader";
import {RootState} from "../../app/store";

export const UpdateCategory = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const categoryId = (params as UpdateCategoryParams).categoryId

  const category = useSelector((state: RootState) => selectCategoryById(state, categoryId));
  const [name, setName] = useState(category ? category.name : '');

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  };

  let onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateCategory(categoryId, name))
    setName('');
  };

  return (
    <>
      <PageHeader title="Update Category"/>
      <Container>
        <form onSubmit={onFormSubmit}>
          <div>
            <input
              onChange={onFieldChange}
              value={name}
              className="form-control" type="text"/>
          </div>
          <Button type="submit" color="primary">Update</Button>
        </form>
      </Container>
    </>
  );
};



