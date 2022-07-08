import React from 'react'
import './App.css'
import Searchengine from './components/SearchEngine'

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <Searchengine
            city="Hannover
          "
          />

          <footer className="text-center">
            Open-sourced on{' '}
            <a
              href="https://github.com/iammansura/weather-forcast"
              target="-blank"
            >
              GitHub
            </a>{' '}
            and hosted on{' '}
            <a
              href="https://react-weather-forcastapp.netlify.app"
              target="-blank "
            >
              {' '}
              Netlify
            </a>{' '}
            coded by{' '}
            <a
              href="https://www.linkedin.com/in/mansura-akter2022/"
              target="-blank"
              title="linkedin"
            >
              Mansura Akter
            </a>{' '}
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
