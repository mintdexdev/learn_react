import React, { useState } from 'react'
import { InputBox } from './components';
import { useCurrencyInfo } from './hooks'

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swapCurrency = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () => { setConvertedAmount(amount * currencyInfo[to]) }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('https://images.pexels.com/photos/32389311/pexels-photo-32389311.jpeg')` }}
    >

      <div className="bg-black/20 w-full max-w-sm mx-auto bg-amber border  border-white/40 rounded-lg p-5 backdrop-blur-sm ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}
        >
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              selectedCurrency={from}
              currencyList={options}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              type="button"
              onClick={swapCurrency}
            >
              swap
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox
              amountDisable
              label="To"
              amount={convertedAmount}
              selectedCurrency={to}
              currencyList={options}
              onCurrencyChange={(currency) => setTo(currency)}
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>

    </div>
  );
}

export default App