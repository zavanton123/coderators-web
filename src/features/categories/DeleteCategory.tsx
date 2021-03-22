import React from 'react';
import {useDispatch} from "react-redux";
import {Redirect, useParams} from "react-router-dom";
import {UpdateCategoryParams} from "./CategoryModels";
import {deleteCategory} from "./CategorySlice";
import {RedirectToLogin} from "../authentication/RedirectToLogin";

export const DeleteCategory = () => {
  const dispatch = useDispatch();
  const params = useParams();
  dispatch(deleteCategory((params as UpdateCategoryParams).categoryId))

  return (
    <>
      <RedirectToLogin/>
      <Redirect to="/categories/"/>
    </>
  );
};
