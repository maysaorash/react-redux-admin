import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'


export default function AddCategory() {
   
    return (
        <>
        <CCardHeader>
              Add Category
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post">
                <CFormGroup>
                  <CLabel htmlFor="Name"/>
                  <CInput type="name" id="name" name="name" placeholder="Name" autoComplete="name"/>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="description"/>
                  <CInput type="description" id="description" name="description" placeholder="Description" autoComplete="description"/>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
            <CFormGroup row>
                  <CCol md="12">
                    <CLabel>Status</CLabel>
                  </CCol>
                  <CCol md="12">
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="enable" name="status" value="enable" />
                      <CLabel variant="custom-checkbox" htmlFor="enable">enable</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="disable" name="status" value="disable" />
                      <CLabel variant="custom-checkbox" htmlFor="disable">Disable</CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
              <CButton type="submit" size="sm" color="danger">Submit</CButton>
              <CButton type="camcel" size="sm" color="secondary">Cancel</CButton>
            </CCardFooter>
          </>
    )
}
