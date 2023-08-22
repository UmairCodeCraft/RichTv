import React from 'react'
import Dynamic from './Dynamic'
import Market from './Market'
import Financial from './Financial'

const Help = () => {
  return (
    <>
      <section className='help_section'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-4 col-md-6'>
                <Dynamic/>
            </div>
            <div className='col-lg-4 col-md-6 pt-5 pt-md-0'>
                <Market/>
            </div>
            <div className='col-lg-4 col-md-6 pt-5 pt-md-0'>
                <Financial/>
            </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Help
