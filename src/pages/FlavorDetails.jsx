import Navbar from '../components/Navbar'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Spin, message } from 'antd'
import '../styles/FlavorDetails.css'
const log = console.log

function FlavorDetails() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

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
    const fetchData = async () => {
      try {
        setLoading(true)
        let response = await fetch(`http://localhost:3000/flavors/${id}`)
        response = await response?.json()
        if (response?.statusCode == 200) {
          setData(response?.data)
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
  }, [])

  return (
    <>
      {!loading ? (
        <>
          {contextHolder}
          <Navbar />
          <div className="flavor_container">
            <h1 className="flavor_name">{data?.name || ''}</h1>
            <div className="details">
              <p>
                <strong>Ingredients:</strong> {data?.ingredients || ''}
              </p>
              <p>
                <strong>Diet:</strong> {data?.vegetarian || ''}
              </p>
              <p>
                <strong>Prep Time:</strong> {data?.prep_time || ''}
              </p>
              <p>
                <strong>Cook Time:</strong> {data?.cook_time || ''}
              </p>
              <p>
                <strong>Flavor Profile:</strong> {data?.flavor_profile || ''}
              </p>
              <p>
                <strong>Course:</strong> {data?.dessert || ''}
              </p>
              <p>
                <strong>State:</strong> {data?.state || ''}
              </p>
              <p>
                <strong>Region:</strong> {data?.region || ''}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="center_spin">
          <Spin size="large" />
        </div>
      )}
    </>
  )
}

export default FlavorDetails
