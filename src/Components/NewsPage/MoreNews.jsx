import React from "react";
import "./MoreNews.css";
import NewsCard from "./NewsCard";

function MoreNews() {
  return (
    <>
      <section className="more_news_container">
        <h1 className="read_more_heading"> READ MORE </h1>

        <div className="more_news_flex">
          <div className="more_news_section">
            <NewsCard
              newsimage="https://www.dfront.pt/wp-content/uploads/2019/11/adobemax-capa.png"
              newsbutton="EVENTS"
              newsheading="Adobe MAX 2021, will be held October 26-28"
              newsdate="Mar 5, 2021"
              newspreview="Adobe MAX, the world's largest creativity conference, will be held October 26-28. This year's conference will be once again virtual and free to all.
                        The event will feature live and on-demand content, including more than 350+ sessions, labs, keynotes, musical performances, special guest appearances."
              newslink="https://www.dexigner.com/news/33598"
            />
          </div>
          <div className="more_news_section">
            <NewsCard
              newsimage="https://artificialintelligence-news.com/wp-content/uploads/sites/9/2021/03/faethm-ai-artificial-intelligence-jobs-uk-automation-research-report-study-lost-work-1536x1024.jpg"
              newsbutton="TECH"
              newsheading="Research finds 1.4 million UK jobs could be automated"
              newsdate="March 15, 2021"
              newspreview="According to a Faethm AI forecast, over 1.4 million jobs in the UK could be replaced by automation this year alone. Faethm’s mission is to prepare the world “for the future of work” by using an AI engine– trained on billions of workforce data points."
            />
          </div>
          {/* <div className="more_news_section">
          <NewsCard
            newsimage="https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            newsbutton="FASHION"
            newsheading="Ratcliffe to be Director of nation talent Trump ignored"
            newsdate="digiQoles  Jan 10, 2021"
            newspreview="Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by"
          />
          </div> */}
          {/* <div className="more_news_section">
          <NewsCard
            newsimage="https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            newsbutton="FASHION"
            newsheading="Ratcliffe to be Director of nation talent Trump ignored"
            newsdate="digiQoles  Jan 10, 2021"
            newspreview="Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by"
          />
          </div> */}
          {/* <div className="more_news_section">
          <NewsCard
            newsimage="https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            newsbutton="FASHION"
            newsheading="Ratcliffe to be Director of nation talent Trump ignored"
            newsdate="digiQoles  Jan 10, 2021"
            newspreview="Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by"
          />
          </div>
          <div className="more_news_section">
          <NewsCard
            newsimage="https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            newsbutton="FASHION"
            newsheading="Ratcliffe to be Director of nation talent Trump ignored"
            newsdate="digiQoles  Jan 10, 2021"
            newspreview="Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by"
          />
          </div>
          <div className="more_news_section">
          <NewsCard
            newsimage="https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            newsbutton="FASHION"
            newsheading="Ratcliffe to be Director of nation talent Trump ignored"
            newsdate="digiQoles  Jan 10, 2021"
            newspreview="Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by"
          />
          </div>
          <div className="more_news_section">
          <NewsCard
            newsimage="https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            newsbutton="FASHION"
            newsheading="Ratcliffe to be Director of nation talent Trump ignored"
            newsdate="digiQoles  Jan 10, 2021"
            newspreview="Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by"
          />
          </div>
          <div className="more_news_section">
          <NewsCard
            newsimage="https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            newsbutton="FASHION"
            newsheading="Ratcliffe to be Director of nation talent Trump ignored"
            newsdate="digiQoles  Jan 10, 2021"
            newspreview="Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by"
          />
          </div>
          */}
        </div>
      </section>
    </>
  );
}

export default MoreNews;
