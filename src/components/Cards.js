import React from 'react';
import Header from './Header';
import CardPreview from './CardPreview';
import CardForm from './CardForm';
import Footer from './Footer';

// const linkAdalab = 'url(https://adalab.es/)';



class Cards extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="page__cards">
          <Header />
          <main className="card__main">
            <CardPreview />
            <CardForm />
          </main>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;