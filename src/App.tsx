import Forecast from './components/Forecast'
import Search from './components/Search'

import useForecast from './hooks/useForecast'

const App = (): JSX.Element => {
  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } =
    useForecast()

  const mainClass = forecast
    ? "flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-full w-full"
    : "flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full";

  return (
    <main className={mainClass}>
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  )
}


export default App