import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'
import './toTop.css';
export default function ToTop() {

  const { y: pageYoffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYoffset > 200) {
      setVisible(true);
    }
    else {
      setVisible(false);
    }
  }, [pageYoffset]);

  let scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) {
    return false;
  }
  return (
    <>
      {/* ====TO TOP ICON===== */}
      <span className="to_top" onClick={() => scrollToTop()}>
        <i className="fas fa-arrow-up"></i>
      </span>
    </>
  )
}

