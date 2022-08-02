export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            {/*하마(주)*/}
            Von of korea
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                회사 연혁
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                회사 소개
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                사내 문화 키워드
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                사내 복지
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                하위 브랜드
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                미래 가치
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                문의
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
