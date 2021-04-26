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
      <Panel name="id" collapsible>
        <Row>
          <Field name="objectNumber" />
          <Field name="collection" />

          <Col>
            <Field name="namedCollections">
              <Field name="namedCollection" />
            </Field>
          </Col>
        </Row>

        <Field name="determinationHistoryGroupList" subpath="ns2:collectionobjects_naturalhistory_extension">
          <Field name="determinationHistoryGroup">
            <Panel>
              <InputTable name="taxonName">
                <Field name="determinationTaxon" />
                <Field name="determinationQualifier" />
              </InputTable>

              <InputTable name="taxonIdent">
                <Field name="determinationBy" />
                <Field name="determinationDateGroup" />
                <Field name="determinationInstitution" />
              </InputTable>

              <Cols>
                <Col>
                  <Field name="determinationKind" />

                  <InputTable name="taxonReference">
                    <Field name="determinationReference" />
                    <Field name="determinationRefPage" />
                  </InputTable>
                </Col>

                <Field name="determinationNote" />
              </Cols>
            </Panel>
          </Field>
        </Field>

        <Row>
          <Field name="localNameGroupList" subpath="ns2:collectionobjects_herbarium">
            <Field name="localNameGroup">
              <Field name="localName" />
              <Field name="localNameLanguage" />
            </Field>
          </Field>

          <div />
        </Row>

        <Row>
          <Field name="herbHybridParentGroupList" subpath="ns2:collectionobjects_herbarium">
            <Field name="herbHybridParentGroup">
              <Field name="herbHybridParent" />
              <Field name="herbHybridParentQualifier" />
            </Field>
          </Field>

          <Field name="hybridName" subpath="ns2:collectionobjects_herbarium" />
        </Row>

        <Field name="labelHeader" subpath="ns2:collectionobjects_herbarium" />
        <Field name="labelFooter" subpath="ns2:collectionobjects_herbarium" />

        <Row>
          <Col>
            <Row>
              <Field name="sheetNumber" subpath="ns2:collectionobjects_herbarium" />
              <Field name="sheetCount" subpath="ns2:collectionobjects_herbarium" />
            </Row>

            <Field name="briefDescriptions">
              <Field name="briefDescription" />
            </Field>

            <Field name="publishToList">
              <Field name="publishTo" />
            </Field>
          </Col>

          <Col>
            <Field name="otherNumberList">
              <Field name="otherNumber">
                <Field name="numberValue" />
                <Field name="numberType" />
              </Field>
            </Field>

            <Field name="comments">
              <Field name="comment" />
            </Field>

            <Field name="inventoryStatusList">
              <Field name="inventoryStatus" />
            </Field>
          </Col>
        </Row>

        <Field name="annotationGroupList" subpath="ns2:collectionobjects_annotation">
          <Field name="annotationGroup">
            <Field name="annotationType" />
            <Field name="annotationNote" />
            <Field name="annotationDate" />
            <Field name="annotationAuthor" />
          </Field>
        </Field>

        <Field name="herbTypeSpecimenGroupList" subpath="ns2:collectionobjects_herbarium">
          <Field name="herbTypeSpecimenGroup">
            <Field name="herbTypeSpecimenKind" />
            <Field name="herbTypeSpecimenAssertionBy" />
            <Field name="herbTypeSpecimenReference" />
            <Field name="herbTypeSpecimenRefPage" />
            <Field name="herbTypeSpecimenBasionym" />
            <Field name="herbTypeSpecimenNotes" />
          </Field>
        </Field>
      </Panel>

      <Panel name="desc" collapsible collapsed>
        <Row>
          <Col>
            <Field name="sex" />
            <Field name="phase" />

            <Field name="forms">
              <Field name="form" />
            </Field>
          </Col>

          <Col>
            <Field name="styles">
              <Field name="style" />
            </Field>

            <Field name="postToPublic" subpath="ns2:collectionobjects_herbarium" />
          </Col>
        </Row>
      </Panel>

      <Panel name="hist" collapsible collapsed>
        <Panel name="assoc" collapsible collapsed>
          <Row>
            <Col>
              <Field name="assocActivityGroupList">
                <Field name="assocActivityGroup">
                  <Field name="assocActivity" />
                  <Field name="assocActivityType" />
                  <Field name="assocActivityNote" />
                </Field>
              </Field>

              <Field name="assocObjectGroupList">
                <Field name="assocObjectGroup">
                  <Field name="assocObject" />
                  <Field name="assocObjectType" />
                  <Field name="assocObjectNote" />
                </Field>
              </Field>

              <Field name="assocConceptGroupList">
                <Field name="assocConceptGroup">
                  <Field name="assocConcept" />
                  <Field name="assocConceptType" />
                  <Field name="assocConceptNote" />
                </Field>
              </Field>

              <Field name="assocCulturalContextGroupList">
                <Field name="assocCulturalContextGroup">
                  <Field name="assocCulturalContext" />
                  <Field name="assocCulturalContextType" />
                  <Field name="assocCulturalContextNote" />
                </Field>
              </Field>

              <Field name="assocOrganizationGroupList">
                <Field name="assocOrganizationGroup">
                  <Field name="assocOrganization" />
                  <Field name="assocOrganizationType" />
                  <Field name="assocOrganizationNote" />
                </Field>
              </Field>

              <Field name="assocPeopleGroupList">
                <Field name="assocPeopleGroup">
                  <Field name="assocPeople" />
                  <Field name="assocPeopleType" />
                  <Field name="assocPeopleNote" />
                </Field>
              </Field>

              <Field name="assocPersonGroupList">
                <Field name="assocPersonGroup">
                  <Field name="assocPerson" />
                  <Field name="assocPersonType" />
                  <Field name="assocPersonNote" />
                </Field>
              </Field>

              <Field name="assocPlaceGroupList">
                <Field name="assocPlaceGroup">
                  <Field name="assocPlace" />
                  <Field name="assocPlaceType" />
                  <Field name="assocPlaceNote" />
                </Field>
              </Field>
            </Col>

            <Col>
              <InputTable name="assocEvent">
                <Field name="assocEventName" />
                <Field name="assocEventNameType" />
              </InputTable>

              <Field name="assocEventOrganizations">
                <Field name="assocEventOrganization" />
              </Field>

              <Field name="assocEventPeoples">
                <Field name="assocEventPeople" />
              </Field>

              <Field name="assocEventPersons">
                <Field name="assocEventPerson" />
              </Field>

              <Field name="assocEventPlaces">
                <Field name="assocEventPlace" />
              </Field>

              <Field name="assocEventNote" />

              <Field name="assocDateGroupList">
                <Field name="assocDateGroup">
                  <Field name="assocStructuredDateGroup" />
                  <Field name="assocDateType" />
                  <Field name="assocDateNote" />
                </Field>
              </Field>
            </Col>
          </Row>
        </Panel>

        <Field name="objectHistoryNote" />

        <Field name="usageGroupList">
          <Field name="usageGroup">
            <Field name="usage" />
            <Field name="usageNote" />
          </Field>
        </Field>

        <Row>
          <Col>
            <Field name="owners">
              <Field name="owner" />
            </Field>

            <Field name="ownershipDateGroupList">
              <Field name="ownershipDateGroup" />
            </Field>
          </Col>

          <Col>
            <Row>
              <Field name="ownershipAccess" />
              <Field name="ownershipCategory" />
            </Row>

            <Field name="ownershipPlace" />
          </Col>
        </Row>

        <InputTable name="ownershipExchange">
          <Field name="ownershipExchangeMethod" />
          <Field name="ownershipExchangeNote" />
          <Field name="ownershipExchangePriceCurrency" />
          <Field name="ownershipExchangePriceValue" />
        </InputTable>
      </Panel>

      <Panel name="reference" collapsible collapsed>
        <Field name="referenceGroupList">
          <Field name="referenceGroup">
            <Field name="reference" />
            <Field name="referenceNote" />
          </Field>
        </Field>
      </Panel>

      <Panel name="collect" collapsible collapsed>
        <Row>
          <Col>
            <Field name="fieldCollectionDateGroup" />

            <Field name="fieldCollectors">
              <Field name="fieldCollector" />
            </Field>

            <Field name="fieldCollectionNumber" />
          </Col>

          <Col>
            <Field name="fieldCollectionMethods">
              <Field name="fieldCollectionMethod" />
            </Field>

            <Field name="habitat" subpath="ns2:collectionobjects_herbarium" />

            <Field name="herbAssociatedTaxaGroupList" subpath="ns2:collectionobjects_herbarium">
              <Field name="herbAassociatedTaxaGroup">
                <Field name="herbAssocTaxon" />
                <Field name="herbAssocTaxonCommonName" />
                <Field name="herbAssocTaxonInteraction" />
              </Field>
            </Field>
          </Col>
        </Row>
      </Panel>

      <Panel name="locality" collapsible collapsed>
        <Field name="herbLocalityGroupList" subpath="ns2:collectionobjects_herbarium">
          <Field name="herbLocalityGroup">
            <Panel>
              <Row>
                <Field name="herbCollectionLocationVerbatim" />
                <Field name="herbCollectionPlace" />
              </Row>
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
