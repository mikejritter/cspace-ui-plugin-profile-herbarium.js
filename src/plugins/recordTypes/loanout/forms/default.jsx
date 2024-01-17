const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Row>
          <Field name="loanOutNumber" />
          <Field name="loanPurpose" />
        </Row>

        <InputTable name="lender">
          <Field name="lendersAuthorizer" />
          <Field name="lendersContact" />
          <Field name="lendersAuthorizationDate" />
        </InputTable>

        <InputTable name="borrower">
          <Field name="borrower" />
          <Field name="borrowersContact" />
          <Field name="borrowersAuthorizer" />
          <Field name="borrowersAuthorizationDate" />
        </InputTable>

        <Cols>
          <Col>
            <Field name="specialConditionsOfLoan" />
            <Field name="loanOutNote" />
          </Col>

          <Col>
            <Field name="majorGroup" subpath="ns2:loansout_herbarium" />

            <Field name="geographyList" subpath="ns2:loansout_herbarium">
              <Field name="geography" />
            </Field>

            <Field name="taxonomyList" subpath="ns2:loansout_herbarium">
              <Field name="taxonomy" />
            </Field>

            <Field name="objKindList" subpath="ns2:loansout_herbarium">
              <Field name="objKind" />
            </Field>
          </Col>
        </Cols>

        <Field name="loanStatusGroupList">
          <Field name="loanStatusGroup">
            <Panel>
              <Row>
                <Field name="loanGroup" />
                <Field name="loanIndividual" />
                <Field name="loanStatus" />
                <Field name="loanStatusDate" />
              </Row>
              <Field name="loanStatusNote" />
            </Panel>
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="loanOutDate" />
            <Field name="shipDate" subpath="ns2:loansout_herbarium" />

            <Row>
              <Field name="transportMethod" subpath="ns2:loansout_herbarium" />
              <Field name="numPackages" subpath="ns2:loansout_herbarium" />
            </Row>
          </Col>

          <Col>
            <Field name="acknowledgeDate" subpath="ns2:loansout_herbarium" />
            <Field name="loanReturnDate" />
            <Field name="loanRenewalApplicationDate" />
          </Col>
        </Cols>

        <Field name="creditLine" />
      </Panel>

      <Panel name="loanItem" collapsible collapsed>
        <Field name="loanoutItems" subpath="ns2:loansout_naturalhistory_extension" />

        <Field name="objectGroupList" subpath="ns2:loansout_naturalhistory_extension">
          <Field name="objectGroup">
            <Panel>
              <Cols>
                <Col>
                  <Field name="objectNumbers" />
                  <Field name="objectQuantity" />
                </Col>

                <Col>
                  <Field name="objectConditions" />
                  <Field name="objectNotes" />
                </Col>
              </Cols>
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="loanReturn" collapsible collapsed>
        <Field name="returnGroupList" subpath="ns2:loansout_naturalhistory_extension">
          <Field name="returnGroup">
            <Panel>
              <Cols>
                <Col>
                  <Field name="returnObjectNumbers" />
                  <Field name="returnQuantity" />
                  <Field name="returnDate" />
                </Col>

                <Col>
                  <Field name="returnDetermination" />
                  <Field name="returnNotes" />
                </Col>
              </Cols>
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="loanTransfer" collapsible collapsed>
        <Field name="transferGroupList" subpath="ns2:loansout_naturalhistory_extension">
          <Field name="transferGroup">
            <Panel>
              <Cols>
                <Col>
                  <Field name="transferDate" />
                  <Field name="transferOrg" />
                  <Field name="transferPerson" />
                </Col>

                <Col>
                  <Field name="transferDirector" />
                  <Field name="transferQuantity" />
                  <Field name="transferNotes" />
                </Col>
              </Cols>
            </Panel>
          </Field>
        </Field>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
