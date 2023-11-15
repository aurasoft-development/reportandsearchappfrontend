import React, { useState } from 'react';


const Bulb = () => {

  const [isLightOn, setLightOn] = useState(false);

  const turnOnLight = () => {
    setLightOn(true);
  };

  const turnOffLight = () => {
    setLightOn(false);
  };

  return (
    <>
      <div>
        <h2>Bumb blow </h2>
        <div className="App">
          <h1>Light Control App</h1>
          <img
            src={isLightOn ? 'https://www.freeiconspng.com/thumbs/lightbulb-png/light-bulb-png-bulb-png1247-12.png' : 'https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png'}
            alt={isLightOn ? 'On' : 'Off'}
            style={{ width: '200px', height: '200px' }}
          />
          <p>The light is {isLightOn ? 'on' : 'off'}.</p>
          <button onClick={turnOnLight}>Turn On</button>
          <button onClick={turnOffLight}>Turn Off</button>
        </div>
      </div>


        <div className="card mt-3  m-3 p-1">
          <hr className="border-light m-0" />
          <div className="card-body">
            <table className="table user-view-table m-0">
              <tbody>
                <tr>
                  <td>UID:</td>
                  <td>1452365</td>
                </tr>
                <tr>
                  <td>Name:</td>
                  <td>Nelle Maxwell</td>
                </tr>
                <tr>
                  <td>Number:</td>
                  <td>9993017877</td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>Awas nagar</td>
                </tr>

              </tbody>
            </table>
            <button>view More to click here </button>
          </div>
        </div>

    </>
  )
}

export default Bulb;



