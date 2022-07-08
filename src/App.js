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
            <a
              href="https://github.com/iammansura/weather-forcast"
              target="-blank"
            >
              Open-sourced on GitHub
            </a>{' '}
            and <br />
            <a
              href="https://react-weather-forcastapp.netlify.app"
              target="-blank "
            >
              {' '}
              hosted on Netlify
            </a>{' '}
            by
            <a
              href="https://www.linkedin.com/in/mansura-akter2022/"
              target="-blank"
            >
              Mansura Akter
            </a>{' '}
            and is and <br />
            <a
              href="https://react-weather-forcastapp.netlify.app"
              target="-blank "
            >
              {' '}
              hosted on Netlify
            </a>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
