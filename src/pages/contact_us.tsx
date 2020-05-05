import React from 'react'
import ContactUsForm from '../components/Forms/ContactUs'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'

export default function contact_us() {
  return (
    <>
      <Layout title={'Contact Us'}>
        <PageTitle title={'Contact us below'} />
        <ContactUsForm />
      </Layout>
    </>
  )
}
