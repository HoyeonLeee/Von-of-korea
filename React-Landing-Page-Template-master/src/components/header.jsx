export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 col-md-offset-0 intro-text'>


                <h1>
                  {props.data ? props.data.title2 : 'Loading2'}
                  <span></span>
                </h1>
                
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  더 알아보기
                  
                </a>{' '}


              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
