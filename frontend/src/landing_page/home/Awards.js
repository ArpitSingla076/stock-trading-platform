import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        
        {/* Left Side Image */}
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="Largest Broker" />
        </div>

        {/* Right Side Content */}
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>

          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            
            {/* List 1 */}
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            {/* List 2 */}
            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Government securities</li>
              </ul>
            </div>
          </div>
          <img src='media/images/pressLogos.png' style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Awards;