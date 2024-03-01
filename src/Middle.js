import Button from 'react-bootstrap/Button';



function Middle() {


const Data = [
  {
    best:'Best Board 1',
    image:'https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__',
    border:'Border 1',
    text1:'WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores',
    headiline:'Main highlights',
    text2:'WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores',
    Showmore:'Show more',
    rate:'9.8',
    date:'Expires',
    rating:'*****',
    view:'View'
  },
  {
    best:'Best Board 2',
    image:'https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__',
    border:'Border 2',
    text1:'WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores',
    headiline:'Main highlights',
    text2:'WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores',
    Showmore:'Show more',
    rate:'5.8',
    date:'Expires',
    rating:'*****',
    view:'View'
  },
  {
    best:'Best Board 3',
    image:'https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__',
    border:'Border 3',
    text1:'WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores',
    headiline:'Main highlights',
    text2:'WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores',
    Showmore:'Show more',
    rate:'8.8',
    date:'Expires',
    rating:'*****',
    view:'View'
  }
]

  return (
    <div className='sai'>
        <h1 style={{textAlign:'center'}}>Best Website builders in the US</h1>
        <h6>Home {'>'} Hosting for all {'>'} Hosting {'>'} Hosting 5 </h6>
      {Data.map((data) => (

      
          <>
          <div className='bests'>

          <h6 className='best'>{data.best}</h6>

        </div><div className='kumar'>
            <div className="layout">
              <div className='image'>
                {/* <header className="layout"> */}
                <img src={data.image} />

                <h6>{data.border}</h6>
              </div>
              <div className='layout-1'>
                <p>{data.text1}</p>
                <div>
                  <h5>{data.headiline}</h5>
                  <p>{data.text2}</p>
                </div>
                <h5>{data.Showmore}</h5>
              </div>
              <div className='mtf'>
                <div className='layout-2'>
                  <h4>{data.rate}</h4>
                  <h5>{data.date}</h5>
                  <h5>{data.rating}</h5>

                </div>
                <div>

                  <Button className='mt4'>{data.view}</Button>
                </div>
              </div>
              {/* </header> */}
            </div>
          </div></>
              ))}
    </div>
  );
}

export default Middle;