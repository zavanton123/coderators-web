import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Container} from "reactstrap";
import {useHistory, useParams} from "react-router-dom";
import {UpdateCategoryParams} from "./CategoryModels";
import {categoryUpdateSuccess, selectCategoryById} from "./CategorySlice";
import {PageHeader} from "../common/PageHeader";
import {RootState} from "../../app/store";
import {categoryService} from "../../api/ApiService";

export const UpdateCategory = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const categoryId = (params as UpdateCategoryParams).categoryId;
  const category = useSelector((state: RootState) => selectCategoryById(state, categoryId));
  const [name, setName] = useState(category ? category.name : '');
  const history = useHistory()

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    categoryService.updateCategory(categoryId, name)
      .then(data => {
        dispatch(categoryUpdateSuccess(data));
        history.replace("/categories/")
      })
      .catch(error => console.log(`zavanton - error: ${error}`));
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



