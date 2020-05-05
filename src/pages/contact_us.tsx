import React from 'react'
import ContactUsForm from '../components/Forms/ContactUs'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'

const ContactUs: React.FC<{}> = () => {
  return (
    <>
      <Layout title={'Contact Us'}>
        <PageTitle title={'Contact us below'} />
        <ContactUsForm />
      </Layout>
    </>
  )
}

export default ContactUs
