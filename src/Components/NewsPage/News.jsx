import NewsSlider from './NewsSlider';
import ReadnextContainer from './ReadnextContainer';
import WhatNewContainer from './WhatNewContainer';

const News = () => {
return(
     <>
     <section style={{background: "#d4ffe4"}}>
     <WhatNewContainer/>
     <NewsSlider/>
     <ReadnextContainer/>
     </section>
     </>
);

}

export default News;