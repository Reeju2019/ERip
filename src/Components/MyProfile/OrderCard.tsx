import * as React from 'react'
import './MyProfile.css'

interface IOrderCardProps {
  item: {
    order_id: string
    time: string
    device: string
    issue: string
    order_status: string
    image: string
  }
}

const OrderCard: React.FunctionComponent<IOrderCardProps> = ({ item }) => {
  return (
    <>
      <section className='bg-white p-3 orderCard'>
        <div className='d-flex justify-content-between mt-3'>
          <div className='orderId'>
            Order ID: #<span>{item.order_id}</span>
          </div>
          <button className='cancelOrder text-danger'>Cancel Order</button>
        </div>
        <div className='d-flex justify-content-between m-3'>
          <div className='col-4'>
            <img src={item.image} className='orderImage' alt={item.issue} />
          </div>
          <div className='col-8'>
            <div className='d-flex flex-row'>
              <i className='fa-solid fa-clock align-self-center mx-2' />
              <span className='fs-5'>{item.time}</span>
            </div>
            <div>
              <i className='fa-solid fa-laptop-code align-self-center mx-2' />
              <span className='fs-5'>{item.device}</span>
            </div>
            <div>
              <i className='fa-solid fa-gears align-self-center mx-2' />
              <span className='fs-5'>{item.issue}</span>
            </div>
          </div>
        </div>
        <p>{item.order_status}</p>
        <div className='d-flex flex-row justify-content-between'>
          <button className='callSupport'>Call Support</button>
          <button className='viewDetails'>View Details</button>
        </div>
      </section>
    </>
  )
}

export default OrderCard
