import * as Scroll from 'react-scroll';
const Scrollers = () => {
  const scroller = Scroll.scroller;
  scroller.scrollTo('myScrollToElement', {
    smooth: true,
    offset: 1200,
    duration: 1500,
  });
};
export default Scrollers;
