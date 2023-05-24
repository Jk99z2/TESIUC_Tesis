import Head from 'next/head'

const GuestLayout = ({ children }) => {
  return (
    <>
      <Head>
        
        <title>TESIUC</title>
      </Head>

      <div className="font-sans text-gray-900 antialiased">
        {children}
      </div>
    </>
  )
}

export default GuestLayout