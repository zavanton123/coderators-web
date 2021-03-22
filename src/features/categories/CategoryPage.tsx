import React from 'react';
import {PageHeader} from "../common/PageHeader";
import {Col, Container, Row} from "reactstrap";
import {CategoryList} from "./CatetoryList";
import {AddCategory} from "./AddCategory";

export const CategoryPage = () => {

  return (
    <>
      <PageHeader title="Categories"/>
      <Container>
        <Row>
          <Col xs="8">
            <CategoryList/>
          </Col>
          <Col xs="4">
            <AddCategory/>
          </Col>
        </Row>
      </Container>
    </>
  );
};
