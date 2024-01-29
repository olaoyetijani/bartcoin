import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import hodlImg from '../assets/img/hodl.png'
function Hodl() {
    const title = "HOdl";
    const desc = "With $BART, the market is not just bullish; it's downright howlish. Forget traditional charts; we're trading in memes and laughs. Join us as we transform the financial landscape into a comic strip, and let's howl all.";
    const btnTxt = "BUY NOW";
    const btnLink = "#presale_coundDown_box";
    const btnSvg = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path d="M14.5 11.4298V12.6798C14.5 12.9631 14.596 13.2008 14.788 13.3928C14.98 13.5848 15.2173 13.6805 15.5 13.6798C15.7833 13.6798 16.021 13.5838 16.213 13.3918C16.405 13.1998 16.5007 12.9625 16.5 12.6798V9.02979C16.5 8.74645 16.404 8.50912 16.212 8.31779C16.02 8.12645 15.7827 8.03045 15.5 8.02979H11.85C11.5667 8.02979 11.3293 8.12579 11.138 8.31779C10.9467 8.50979 10.8507 8.74712 10.85 9.02979C10.85 9.31312 10.946 9.55079 11.138 9.74279C11.33 9.93479 11.5673 10.0305 11.85 10.0298H13.075L8.7 14.4048C8.51667 14.5881 8.425 14.8175 8.425 15.0928C8.425 15.3681 8.51667 15.6055 8.7 15.8048C8.9 16.0048 9.13767 16.1048 9.413 16.1048C9.68833 16.1048 9.92567 16.0048 10.125 15.8048L14.5 11.4298ZM12.5 22.0298C11.1167 22.0298 9.81667 21.7671 8.6 21.2418C7.38333 20.7165 6.325 20.0041 5.425 19.1048C4.525 18.2048 3.81267 17.1465 3.288 15.9298C2.76333 14.7131 2.50067 13.4131 2.5 12.0298C2.5 10.6465 2.76267 9.34645 3.288 8.12979C3.81333 6.91312 4.52567 5.85479 5.425 4.95479C6.325 4.05479 7.38333 3.34245 8.6 2.81779C9.81667 2.29312 11.1167 2.03045 12.5 2.02979C13.8833 2.02979 15.1833 2.29245 16.4 2.81779C17.6167 3.34312 18.675 4.05545 19.575 4.95479C20.475 5.85479 21.1877 6.91312 21.713 8.12979C22.2383 9.34645 22.5007 10.6465 22.5 12.0298C22.5 13.4131 22.2373 14.7131 21.712 15.9298C21.1867 17.1465 20.4743 18.2048 19.575 19.1048C18.675 20.0048 17.6167 20.7175 16.4 21.2428C15.1833 21.7681 13.8833 22.0305 12.5 22.0298Z" fill="black"/>
  </svg>;
  return (
    <section className='hodl_area zigzag__bg'>
      <Container>
        <Row className='align-items-center'>
            <Col md={6} lg={5}>
                <figure>
                    <img src={hodlImg} alt="" />
                </figure>
            </Col>
            <Col md={6} lg={{ span: 6, offset: 1 }}>
                <div className="hodl_box">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <a href={btnLink} className="boxed__btn">{btnTxt} {btnSvg}</a>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hodl
