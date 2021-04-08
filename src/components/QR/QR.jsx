import StripeCheckout from 'react-stripe-checkout';
import React, { useState } from 'react';
var QRCode = require('qrcode.react');

function QR({ data }) {
  const priceForStripe = data?.price * 100;
  const publishableKey =
    'pk_test_51Ht8t0AUGh2stU4g2NhzjhmzwmSJ6Mt3ghnJAbE6L6xGm0BpbgVQaids6bI9ZboSENHhYe87U2VVsai87mR3QdeJ00VoxGi0Ho';
  const onToken = () => {
    setPayment(true);
  };
  console.log(data);

  const [payment, setPayment] = useState(false);
  const downloadQR = () => {
    const canvas = document.getElementById('eventpass');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `${data.firstName + '_' + data.lastName}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5%' }}>
      {payment ? (
        <div className="container">
          <h3 className="alert alert-success ticket-msg ">
            Your Ticket is booked
          </h3>

          <div className="qr-stamp">
            <QRCode
              id="eventpass"
              value={JSON.stringify(data)}
              size={290}
              level={'H'}
              includeMargin={true}
            />
            <img
              src="https://cdn.pixabay.com/photo/2020/04/10/13/23/paid-5025785_960_720.png"
              alt="paid"
              className="ticket-stamp"
            />
          </div>

          <hr />
          <button className="btn btn-outline-success" onClick={downloadQR}>
            {' '}
            Download QR{' '}
          </button>
        </div>
      ) : (
        <StripeCheckout
          label="Pay Now"
          name="Shopify Ltd."
          billingAddress
          shippingAddress
          description={`Your total is ${data?.price}.00`}
          amount={priceForStripe}
          panelLabel="Pay Now"
          token={onToken}
          stripeKey={publishableKey}
        ></StripeCheckout>
      )}
    </div>
  );
}

export default QR;
