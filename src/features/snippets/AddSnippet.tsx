import React, {useState} from 'react';
import {PageHeader} from "../common/PageHeader";
import {Button, Container} from "reactstrap";
import styled from "styled-components";

const CustomInput = styled.input.attrs(props => ({
  className: 'form-control'
}))``

export const AddSnippet = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value);
  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);

  const onFormSubmit = ((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`zavanton - submit: ${title}, ${content.substr(0, 10)}`);
  })

  return (
    <>
      <PageHeader title="Create Snippet"/>
      <Container>

        <form onSubmit={onFormSubmit}>
          <div>
            <label>Snippet title</label><br/>
            <CustomInput
              onChange={onTitleChange}
              value={title}
              type="text"/>
          </div>
          <div>
            <label>Content</label><br/>
            <textarea
              onChange={onContentChange}
              value={content}
              className='form-control'
              rows={20} cols={300}/><br/>
          </div>
          <div>
            <Button color="primary">Create</Button>
          </div>
          <br/>
        </form>

      </Container>
    </>
  );
}