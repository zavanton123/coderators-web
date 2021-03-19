import React, {useEffect} from 'react';
import {PageHeader} from "../common/PageHeader";
import {Container} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {loadTags, selectAllTags} from "./TagSlice";
import {RootState} from "../../app/store";

interface Tag {
  id: number;
  name: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
}

export const TagList = () => {

  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.tags.loading)
  const error = useSelector((state: RootState) => state.tags.error)
  const tags = useSelector(selectAllTags);

  useEffect(() => {
    dispatch(loadTags());
  }, []);

  let content;

  if (error) {
    content = <p>Error...</p>
  }

  if (loading) {
    content = <p>Loading...</p>
  }

  if (tags && tags.length > 0) {
    content = (
      <ul>
        {
          tags.map(item => {
            const tag = item as Tag;
            return <li
              key={tag.id}
            >{tag.name} -> {tag.created_at}</li>
          })
        }
      </ul>
    );
  }

  return (
    <>
      <PageHeader title="Tags"/>
      <Container>
        <h1>Tags</h1>
        {content}
      </Container>
    </>
  );
}
