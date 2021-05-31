import React, { lazy, useState } from 'react'
import {
  CBadge,
  CButton,
  CCardGroup,
  // CChartDoughnut,
  CCard,
  CCardBody,
  CCardFooter,
  CWidgetIcon,
  CCardHeader,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CCol,
  CRow,
  CForm,
  CInput,
  CPagination,
} from '@coreui/react';

import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea
} from '@coreui/react-chartjs'

import CIcon from '@coreui/icons-react'

import { DocsLink } from 'src/reusable'

import usersData from '../../components/RecentlyViewedData';

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))



const Dashboard = () => {
  return (
    <>
      <CRow>
        <CCol lg='8'>
          <WidgetsDropdown />
          <WidgetsBrand withCharts />
        </CCol>

        <CCol lg='4'>
          <CCard>
            <CCardHeader>
              User's Of Product
        </CCardHeader>
            <CCardBody>
              <CChartDoughnut

                datasets={[
                  {
                    backgroundColor: [
                      '#41B883',
                      '#E46651',
                      '#00D8FF',
                      '#DD1B16'
                    ],
                    data: [40, 20, 80, 10]
                  }
                ]}

              // labels={['New Customer', 'Exsisting Subsriber', 'Daily Visitor', 'Extented Subsriber']}
              // // labels= {['New Customer']}
              // options={{
              //   tooltips: {
              //     enabled: true
              //   }}}

              />
              <CRow className='text-center'>
                {/* <CCol md sm='6' className='mb-sm-2 mb-0'> */}
                <CCol md sm='6' lg='6'>
                  <div className='text-muted'>
                    <div className='cubic-form'></div>
                    <p>New Costumer</p>
                  </div>
                </CCol>
                {/* <CCol md sm='6' className='mb-sm-2 mb-0'> */}

                <CCol md sm='12' lg='6'>
                  <div className='text-muted'>This Month</div>

                </CCol>
                {/* <CCol md sm='6' className='mb-sm-2 mb-0'> */}
                <CCol md sm='12' lg='6'>

                  <div className='text-muted'>This Month</div>

                </CCol>
                {/* <CCol md sm='6' lg=''className='mb-sm-2 mb-0'> */}
                <CCol md sm='12' lg='6'>

                  <div className='text-muted'>This Month</div>

                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
          {/* <CCardFooter>
          <CRow className='text-center'>
            <CCol md sm='12' className='mb-sm-2 mb-0'>
              <div className='text-muted'>This Month</div>
              <CProgress
                className='progress-xs mt-2'
                precision={1}
                color='danger'
                value={40}
              />

              </CCol>
              </CRow>
              </CCardFooter> */}

        </CCol>
      </CRow>

      <CRow>
        <CCol lg="4">
          <CCardGroup>
            <CCard>
              <CCardHeader>
                Categories
          {/* <DocsLink href="http://www.chartjs.org"/> */}
              </CCardHeader>
              <CCardBody>
                <CChartBar
                  datasets={[
                    {
                      label: 'This Month',
                      backgroundColor: 'red',
                      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],

                    },
                    {
                      label: 'Last Month',
                      backgroundColor: 'blue',
                      data: [50, 30, 18, 49, 20, 70, 89, 60, 20, 10, 22, 51],
                    }
                  ]}
                  labels="a,b,c,d"
                  options={{
                    tooltips: {
                      enabled: true
                    }
                  }}
                />
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
        <CCol lg="8">
          <CRow>
            <CCardGroup>
              <CCol lg="3">
                <CCol xs="12" sm="6" lg="2">
                  <CWidgetIcon text="income" header="$1.999,50" color="primary">
                    <CIcon width={24} name="cil-settings" />
                  </CWidgetIcon>
                </CCol>
                <CCol xs="12" sm="6" lg="2">
                  <CWidgetIcon text="income" header="$1.999,50" color="info">
                    <CIcon width={24} name="cil-user" />
                  </CWidgetIcon>
                </CCol>
                <CCol xs="12" sm="6" lg="2">
                  <CWidgetIcon text="income" header="$1.999,50" color="warning">
                    <CIcon width={24} name="cil-moon" />
                  </CWidgetIcon>
                </CCol>
              </CCol>
              <CCol lg="3">
                <CCol xs="12" sm="6" lg="2">
                  <CWidgetIcon text="income" header="$1.999,50" color="danger">
                    <CIcon width={24} name="cil-bell" />
                  </CWidgetIcon>
                </CCol>
                <CCol xs="12" sm="6" lg="2">
                  <CWidgetIcon text="income" header="$1.999,50" color="primary" iconPadding={false}>
                    <CIcon width={24} name="cil-settings" />
                  </CWidgetIcon>
                </CCol>
                <CCol xs="12" sm="2" lg="2">
                  <CWidgetIcon text="income" header="$1.999,50" color="info" iconPadding={false}>
                    <CIcon width={24} name="cil-laptop" />
                  </CWidgetIcon>
                </CCol>
              </CCol>
              <CCol lg="6">
                <CCard>
                  <CCardHeader>
                    Doughnut Chart
        </CCardHeader>
                  <CCardBody>
                    <CChartDoughnut
                      datasets={[
                        {
                          backgroundColor: [
                            '#41B883',
                            '#E46651',
                            '#00D8FF',
                            '#DD1B16'
                          ],
                          data: [40, 20, 80, 10]
                        }
                      ]}
                      labels={['VueJs', 'EmberJs', 'ReactJs', 'AngularJs']}
                      options={{
                        tooltips: {
                          enabled: true
                        }
                      }}
                    />
                  </CCardBody>
                </CCard>
              </CCol>
            </CCardGroup>
          </CRow>
        </CCol>
      </CRow>

      <br />

      <CCard>
        <CCardHeader>
          <CRow>
            <CCol  lg='6'>
              <div className='section-title'>Recently Viewed Items</div>
          </CCol>
            <CCol className='viewed-items-right' lg='6'>
              <CDropdown className="m-1 btn-group">
                <CDropdownToggle color="black">
                  Most Likely
              </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem header></CDropdownItem>
                  <CDropdownItem>Most Likely</CDropdownItem>
                  <CDropdownItem>Unlikely</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              </CCol>
        </CRow>
        </CCardHeader>

            <CCardBody>
              <CRow>
                <CCol>
                  <CRow>
                    <CCol lg='6'>       Show
                    <select className="custom-select-sm ">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                      <spam>entries</spam>
                    </CCol>
                    <CCol lg='6'>
                      <CForm inline>
                        <CInput
                          className="mr-sm-2"
                          placeholder="Search:"
                          size="md"
                        />
                        {/* <CButton color="light" className="my-2 my-sm-0" type="submit">Search</CButton> */}
                      </CForm>
                    </CCol>
                  </CRow>

                  <CRow>
                    <CCol className='dashboard-viewed'>
                      <table className="table  mb-0 d-none d-sm-table">
                        <thead >
                          <tr className='table-head'>
                            <th className="text-center"><CIcon name="cil-people" /></th>
                            <th className="text-center">MOVIE< CIcon name="cil-arrow-top" /><CIcon name="cil-arrow-bottom" /></th>
                            <th className="text-center">RATING< CIcon name="cil-arrow-top" /><CIcon name="cil-arrow-bottom" /></th>
                            <th>CATEGORY< CIcon name="cil-arrow-top" /><CIcon name="cil-arrow-bottom" /></th>
                            <th className="text-center">DOWNLAND/VIEWS< CIcon name="cil-arrow-top" /><CIcon name="cil-arrow-bottom" /></th>
                            <th>USER < CIcon name="cil-arrow-top" /><CIcon name="cil-arrow-bottom" /></th>
                            <th>DATE < CIcon name="cil-arrow-top" /><CIcon name="cil-arrow-bottom" /></th>
                            <th className="text-center"><CIcon name="cil-heart" />< CIcon name="cil-arrow-top" /><CIcon name="cil-arrow-bottom" /></th>
                          </tr>
                        </thead>
                        <tbody>
                          {usersData.map((e) => (
                            <tr>
                              <td className="text-center">
                                <div className="c-avatar">
                                  <img src={e.img} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                                </div>
                              </td>
                              <td>
                                <div>{e.MOVIE}</div>
                              </td>
                              <td className="text-center">
                                <CIcon height={15} name="cil-star" />  8.9
                    </td>
                              <td className="text-center"> {e.CATEGORY}</td>
                              <td className="text-center"><CIcon name="cil-eye" />{e.downlandViews}</td>
                              <td className="text-center">{e.USER}</td>
                              <td className="text-center">{e.DATE}</td>
                              <td className="text-center"><CIcon name="cil-heart" /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </CCol>
                  </CRow>

                  <CRow>
                    <CCol>
                      <div >Showing 1 to 5 of 5 entries</div>
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous">
                          <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0" class="page-link">Previous</a>
                        </li>
                        <li class="paginate_button page-item active">
                          <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="1" tabindex="0" class="page-link">1</a>
                        </li>
                        <li className="paginate_button page-item next disabled" id="DataTables_Table_0_next">
                          <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="2" tabindex="0" class="page-link">Next</a>
                        </li>
                      </ul>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard


