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
          <Field name="loanInNumber" />
          <Field name="loanPurpose" />
        </Row>

        <Field name="lenderGroupList">
          <Field name="lenderGroup">
            <Field name="lender" />
            <Field name="lendersContact" />
            <Field name="lendersAuthorizer" />
            <Field name="lendersAuthorizationDate" />
          </Field>
        </Field>

        <InputTable name="borrower">
          <Field name="borrowersContact" />
          <Field name="borrowersAuthorizer" />
          <Field name="borrowersAuthorizationDate" />
        </InputTable>

        <Row>
          <Col>
            <Field name="loanInConditions" />
            <Field name="loanInNote" />
          </Col>

          <Col>
            <Field name="majorGroup" subpath="ns2:loansin_herbarium" />

            <Field name="geographyList" subpath="ns2:loansin_herbarium">
              <Field name="geography" />
            </Field>

            <Field name="taxonomyList" subpath="ns2:loansin_herbarium">
              <Field name="taxonomy" />
            </Field>

            <Field name="objKindList" subpath="ns2:loansin_herbarium">
              <Field name="objKind" />
            </Field>
          </Col>
        </Row>

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

        <Row>
          <Col>
            <Field name="loanInDate" />
            <Field name="dueDate" subpath="ns2:loansin_herbarium" />
            <Field name="loanRenewalApplicationDate" />
          </Col>

          <Col>
            <Field name="shipDate" subpath="ns2:loansin_herbarium" />
            <Field name="loanReturnDate" />
          </Col>
        </Row>

        <InputTable name="transferIn">
          <Field name="transferInDate" subpath="ns2:loansin_herbarium" />
          <Field name="transferInOrg" subpath="ns2:loansin_herbarium" />
          <Field name="transferInPerson" subpath="ns2:loansin_herbarium" />
        </InputTable>

        <Field name="creditLine" />
      </Panel>

      <Panel name="return" collapsible collapsed>
        <Field name="returnGroupList" subpath="ns2:loansin_naturalhistory_extension">
          <Field name="returnGroup">
            <Field name="returnDate" />
            <Field name="returnQuantity" />
            <Field name="returnNotes" />
          </Field>
        </Field>
      </Panel>

      <Panel name="transferOut" collapsible collapsed>
        <Field name="transferOutGroupList" subpath="ns2:loansin_naturalhistory_extension">
          <Field name="transferOutGroup">
            <Panel>
              <Cols>
                <Col>
                  <Field name="transferOutDate" />
                  <Field name="transferOutQuantity" />
                  <Field name="transferOutOrg" />
                </Col>

                <Col>
                  <Field name="transferOutPerson" />
                  <Field name="transferOutDirector" />
                  <Field name="transferOutNotes" />
                </Col>
              </Cols>

              <InputTable name="transferOutReturn">
                <Field name="transferOutReturnDate" />
                <Field name="transferOutReturnQuantity" />
                <Field name="transferOutReturnNotes" />
              </InputTable>
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
