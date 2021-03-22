import React, {useState} from 'react';
import {Button} from "reactstrap";
import {useDispatch} from "react-redux";
import {addCategory} from "./CategorySlice";
import {RedirectToLogin} from "../authentication/RedirectToLogin";

export const AddCategory = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  };

  let onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addCategory(name));
    setName('');
  };

  return (
    <>
      <RedirectToLogin/>

      <h3>New Category</h3>
      <form onSubmit={onFormSubmit}>
        <input
          onChange={onFieldChange}
          value={name}
          className="form-control" type="text"/>
        <br/>
        <Button type="submit" color="primary">Add</Button>
      </form>
    </>
  );
};
