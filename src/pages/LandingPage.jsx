import Navbar from '../components/Navbar'
import React, { useEffect, useState } from 'react'
import { Table, Input, Button, Spin, message } from 'antd'
import { Link } from 'react-router-dom'
import { RiseOutlined } from '@ant-design/icons'
import '../styles/LandingPage.css'
const log = console.log

function LandingPage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [pageNumber, setPageNumber] = useState(1)
  const [sort, setSort] = useState({
    field: 'name',
    order: 'ascend'
  })
  const [filterr, setFilterr] = useState(null)
  const [search, setSearch] = useState('')

  const [messageApi, contextHolder] = message.useMessage()
  const error = (message) => {
    messageApi.open({
      type: 'error',
      content: message,
      className: 'custom-class',
      style: {
        marginTop: '5vh'
      }
    })
  }

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller?.signal

    const fetchData = async () => {
      try {
        setLoading(true)
        let response = await fetch(
          `http://localhost:3000/flavors?page_number=${pageNumber}&page_size=${10}&sort[${
            sort?.field
          }]=${sort?.order == 'ascend' ? 'asc' : 'desc'}${
            filterr?.query ? '&' + filterr?.query : ''
          }${search ? '&search=' + search : ''}`,
          { signal: signal }
        )
        response = await response?.json()
        if (response?.statusCode == 200) {
          setData(response)
        } else {
          error('an error occured')
        }
      } catch (error) {
        error('an error occured')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    return () => {
      controller.abort()
    }
  }, [pageNumber, sort?.order, filterr?.query, search])

  const onChange = (pagination, filter, sorter, extra) => {
    if (extra?.action == 'sort') {
      setSort({
        field: sorter?.field,
        order: sorter?.order || 'descend'
      })
    }
    if (extra?.action == 'filter') {
      const query = Object.entries(filter || {})
        ?.flatMap(([key, value]) => {
          if (Array.isArray(value)) {
            return value?.map((val) => `filter[${key}]=${val}`)
          }
        })
        .join('&')
      setPageNumber(1)
      setFilterr((prev) => ({
        ...prev,
        ...filter,
        query: query
      }))
    }
  }

  const onSearch = (value, _e, info) => {
    if (info?.source == 'input' && value) {
      setPageNumber(1)
      setSearch(value)
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, record) => (
        <Link to={`/${record?.key}`} style={{ cursor: 'pointer' }}>
          {text}
        </Link>
      ),
      width: '10%'
    },
    {
      title: 'Ingredients',
      dataIndex: 'ingredients',
      sorter: () => {},
      sortOrder: sort?.field == 'ingredients' ? sort?.order : null
    },
    {
      title: 'Diet',
      dataIndex: 'diet',
      width: '10%',
      filters: [
        {
          text: 'vegetarian',
          value: 'vegetarian'
        },
        {
          text: 'non vegetarian',
          value: 'non vegetarian'
        }
      ],
      filterMode: 'menu',
      filteredValue: filterr?.diet || [],
      filterMultiple: false
    },
    {
      title: 'Prep time',
      dataIndex: 'prep_time',
      width: '5%',
      sorter: () => {},
      sortOrder: sort?.field == 'prep_time' ? sort?.order : null
    },
    {
      title: 'Cook time',
      dataIndex: 'cook_time',
      width: '5%',
      sorter: () => {},
      sortOrder: sort?.field == 'cook_time' ? sort?.order : null
    },
    {
      title: 'Flavor',
      dataIndex: 'flavor_profile',
      width: '10%',
      filters: [
        {
          text: 'spicy',
          value: 'spicy'
        },
        {
          text: 'sweet',
          value: 'sweet'
        }
      ],
      filterMode: 'menu',
      filteredValue: filterr?.flavor_profile || [],
      filterMultiple: false
    },
    {
      title: 'Course',
      dataIndex: 'course',
      width: '10%'
    },
    {
      title: 'State',
      dataIndex: 'state',
      width: '10%',
      sorter: () => {},
      sortOrder: sort?.field == 'state' ? sort?.order : null
    },
    {
      title: 'Region',
      dataIndex: 'region',
      width: '10%',
      sorter: () => {},
      sortOrder: sort?.field == 'region' ? sort?.order : null
    }
  ]

  return (
    <>
      {!loading ? (
        <>
          {contextHolder}
          <Navbar />
          <div className="container">
            <div className="suggestor_btn">
              <Link to={'/suggestor'} style={{ cursor: 'pointer' }}>
                <Button icon={<RiseOutlined />} onClick={() => {}}>
                  suggestor
                </Button>
              </Link>
            </div>
            <div>
              <Input.Search
                placeholder="search by name, state and region"
                enterButton="Search"
                size="large"
                loading={false}
                className="custom-search-button"
                onSearch={onSearch}
                defaultValue={search}
              />
              <Table
                columns={columns}
                dataSource={data?.data}
                onChange={onChange}
                scroll={{ x: true }}
                pagination={false}
                sortDirections={['descend', 'ascend']}
                showSorterTooltip={false}
                size={'small'}
              />
            </div>

            <div className="pagination_buttons">
              <Button
                onClick={() => {
                  setPageNumber((prev) => prev - 1)
                }}
                disabled={pageNumber == 1}
              >
                previous
              </Button>
              <Button
                onClick={() => {
                  setPageNumber((prev) => prev + 1)
                }}
                disabled={
                  Math.ceil(Number(data?.pagination?.total || 0) / 10) <=
                  pageNumber
                }
              >
                next
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          {contextHolder}
          <div className="center_spin">
            <Spin size="large" />
          </div>
        </>
      )}
    </>
  )
}

export default LandingPage

//mimicing loading effect
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
// await delay(500)
