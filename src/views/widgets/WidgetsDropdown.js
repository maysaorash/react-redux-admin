import React, { lazy } from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCard,
  CCardBody,
  CCol,
  CDropdown,
  CCardHeader,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CCardGroup
} from '@coreui/react'


import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'

import {
  CChartDoughnut,
} from '@coreui/react-chartjs'

const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const WidgetsDropdown = () => {
  // render
  return (
    
    <CRow>
    <CCol sm="6" lg="8">
    <CRow>
      <CCol sm="6" lg="3">
        
        <CWidgetDropdown
          color="#141414"
          text="View"
          header="+24K"
          style={{height: '180px'}}
          // footerSlot={
            // <ChartLineSimple
            //   pointed
            //   className="c-chart-wrapper mt-3 mx-3"
            
            //   dataPoints={[65, 59, 84, 84, 51, 55, 40]}
              // pointHoverBackgroundColor="primary"
              // label="View"
              // labels="months"
            // />
          // }
        >
          <CDropdown>
          
            <CDropdownToggle color="#141414" style={{height:"240px"}}>
              
            </CDropdownToggle>
            +35K
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
           
          </CDropdown>
          <CIcon name="cil-layers"/>
        </CWidgetDropdown>
        
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="#141414"
          header="+55K"
          text="Rated This App"
          // footerSlot={
          //   <ChartLineSimple
          //     pointed
          //     className="mt-3 mx-3"
              // style={{height: '160px'}}
              style={{height: '180px'}}

          //     dataPoints={[1, 18, 9, 17, 34, 22, 11]}
          //     pointHoverBackgroundColor="info"
          //     options={{ elements: { line: { tension: 0.00001 }}}}
          //     label="Members"
          //     labels="months"
          //   />
          // }
        >
          <CDropdown>
     
              
              <CDropdownToggle color="#141414" style={{height:"240px"}} >
              
            </CDropdownToggle>
            +50K
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CIcon name="cil-star"/>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="#141414"
          header="+1M"
          text="Downloaded"
          // footerSlot={
          //   <ChartLineSimple
          //     className="mt-3"
              // style={{height: '160px'}}
              style={{height: '180px'}}

              // backgroundColor="rgba(255,255,255,.2)"
          //     dataPoints={[78, 81, 80, 45, 34, 12, 40]}
          //     options={{ elements: { line: { borderWidth: 2.5 }}}}
          //     pointHoverBackgroundColor="warning"
          //     label="Members"
          //     labels="months"
          //   />
          // }
        >
          <CDropdown>
            <CDropdownToggle color="#141414" style={{height:"240px"}}>
             
            </CDropdownToggle>
            +80k
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CIcon name="cil-arrow-circle-bottom"/>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="#141414"
          header="+2M"
          text="VISITORS"
          // footerSlot={
          //   <ChartBarSimple
          //     className="mt-3 mx-3"
              // style={{height: '160px'}}
              style={{height: '180px'}}

              // backgroundColor="rgb(250, 152, 152)"
          //     label="Members"
          //     labels="months"
          //   />
          // }
        >
          <CDropdown>
            <CDropdownToggle caret className="text-white" color="#141414" style={{height:"240px"}}>
              {/* <CIcon name="cil-settings"/> */}
            </CDropdownToggle>
            +80k
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CIcon name="cil-user"/>
        </CWidgetDropdown>
      </CCol>
      </CRow>
     <CRow>
      <WidgetsBrand withCharts/>
    </CRow>
     </CCol>
     
    <CCol sm="6" lg="4">
      <CCard>
        <CCardHeader >
          User's Of Product
        </CCardHeader>
        <CChartDoughnut
            datasets={[
              {
                data: [44, 55, 30, 30],
                backgroundColor: [
                  '#FF0000',
                  '#F68A04',
                  '#007AFF',
                  "#545E75"
                ]
                
              }
            ]}
            labels={['New Customer', 'Exsisting Subsriber', 'Daily Visitor', 'Extented Subsriber']}
           
          />
       </CCard>
      </CCol>
      
    </CRow>
    
  )
}

export default WidgetsDropdown
