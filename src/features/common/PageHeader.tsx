import React from 'react';

export interface PageHeaderProps {
  title: string;
}

export const PageHeader = ({title}: PageHeaderProps) => {
  return (
    <section>
      <div className="container-fluid px-3 py-3 pt-md-5 pb-md-4 mx-auto mb-5 text-center text-center bg-light">
        <h1 className="display-4">{title}</h1>
      </div>
    </section>
  )
}
