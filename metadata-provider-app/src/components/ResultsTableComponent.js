import React from 'react';
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import SampleDetailsModal from "./SampleDetailsModal";
import ProjectDetailsModal from "./ProjectDetailsModal";
import AttributeValuesTableComponent from "./AttributeValuesTableComponent";

export default function ResultsTableComponent(props) {

  return (
    <>
      {props.selectedContentButton === 'samples' &&
      <>
        {props.samples.length > 0 &&
        <Container>
          <Row>
            <Col>
              <Container>
                <div className="results">
                  <Table size={'sm'} striped bordered hover variant="dark">
                    <thead>
                    <tr>
                      <th>#</th>
                      <th>Sample ID</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.samples.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <SampleDetailsModal
                            sample={item}
                            relevantAttributes={props.relevantAttributes}
                            highlighted={props.extraSampleIDs.includes(item.biosampleAccession)}
                          />
                        </td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>}
        {props.samples.length === 0 && <div><p className="search-msg">No samples found</p></div>}
      </>}
      {/************************************************************************************************/}
      {props.selectedContentButton === 'projects' &&
      <>
        {props.projectIDs.length > 0 &&
        <Container>
          <Row>
            <Col>
              <Container>
                <div className="results">
                  <Table size={'sm'} striped bordered hover variant="dark">
                    <thead>
                    <tr>
                      <th>#</th>
                      <th>Project Accession</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.projectIDs.map((id, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <ProjectDetailsModal
                            projectID={id}
                            projectTitle={props.projectsAggMap[id].projectTitle ? props.projectsAggMap[id].projectTitle : 'NA'}
                            projectOrganizations={props.projectsAggMap[id].organizations}
                            highlighted={props.extraProjectIDs.includes(id)}
                          />
                        </td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
                </div>
              </Container>

            </Col>
          </Row>
        </Container>}
        {props.projectIDs.length === 0 && <div><p className="search-msg">No projects found</p></div>}
      </>}
      {/************************************************************************************************/}
      {props.selectedContentButton === 'organizations' &&
      <>
        {props.organizationsAggList.length > 0 &&
        <Container>
          <Row>
            <Col>
              <Container>
                <div className="results results-large">
                  <Table size={'sm'} striped bordered hover variant="dark">
                    <thead>
                    <tr>
                      <th>#</th>
                      <th>Center name</th>
                      <th>No. samples</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.organizationsAggList.map((organization, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          {organization.name}
                        </td>
                        <td>{organization.count}</td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>}
        {props.projectIDs.length === 0 && <div><p className="search-msg">No centers found</p></div>}
      </>}
      {/************************************************************************************************/}
      {props.selectedContentButton === 'disease' &&
      <AttributeValuesTableComponent attributeValuesAggMap={props.diseaseAggMap} content="Diseases"/>}
      {props.selectedContentButton === 'tissue provider' &&
      <AttributeValuesTableComponent attributeValuesAggMap={props.tissueProviderAggMap} content="Tissue providers"/>}
      {props.selectedContentButton === 'tissue' &&
      <AttributeValuesTableComponent attributeValuesAggMap={props.tissueAggMap} content="Tissues"/>}
      {props.selectedContentButton === 'cell type' &&
      <AttributeValuesTableComponent attributeValuesAggMap={props.cellTypeAggMap} content="Cell types"/>}
      {props.selectedContentButton === 'cell line' &&
      <AttributeValuesTableComponent attributeValuesAggMap={props.cellLineAggMap} content="Cell lines"/>}
      {props.selectedContentButton === 'sex' &&
      <AttributeValuesTableComponent attributeValuesAggMap={props.sexAggMap} content="Sex values"/>}
    </>
  );

}