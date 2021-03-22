import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Button, Container} from "reactstrap";
import {useParams} from "react-router-dom";
import {UpdateCategoryParams} from "./CategoryModels";
import {updateCategory} from "./CategorySlice";
import {PageHeader} from "../common/PageHeader";

export const UpdateCategory = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const params = useParams();

  const categoryId = (params as UpdateCategoryParams).categoryId

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



