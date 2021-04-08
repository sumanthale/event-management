import StripeCheckout from 'react-stripe-checkout';
import React, { useState } from 'react';
var QRCode = require('qrcode.react');

function QR({ data }) {
  const priceForStripe = data.price * 100;
  const publishableKey =
    'pk_test_51Ht8t0AUGh2stU4g2NhzjhmzwmSJ6Mt3ghnJAbE6L6xGm0BpbgVQaids6bI9ZboSENHhYe87U2VVsai87mR3QdeJ00VoxGi0Ho';
  const onToken = () => {
    setPayment(true);
  };

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
        <>
          <QRCode
            id="eventpass"
            value={JSON.stringify(data)}
            size={290}
            level={'H'}
            includeMargin={true}
          />
          <hr />
          <button className="btn btn-outline-success" onClick={downloadQR}>
            {' '}
            Download QR{' '}
          </button>
        </>
      ) : (
        <StripeCheckout
          label="Pay Now"
          name="Shopify Ltd."
          billingAddress
          shippingAddress
          description={`Your total is ${data.price}.00`}
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
