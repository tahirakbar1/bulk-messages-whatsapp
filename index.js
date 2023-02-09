const axios = require('axios');

async function sendBulkMessages(recipients, message) {
  try {
    // Iterate over the recipients array and send a message to each recipient
    for (const recipient of recipients) {
      const response = await axios.post('https://api.whatsapp.com/v1/messages', {
        to: recipient,
        type: 'text',
        content: {
          text: message
        }
      }, {
        headers: {
          'Authorization': 'Bearer <YOUR_AUTH_TOKEN>'
        }
      });

      console.log(`Message sent to ${recipient}: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
}

// Example usage
const recipients = ['1234567890', '0987654321', '6789054321'];
const message = 'Hello, this is a bulk message sent using the WhatsApp Business API.';

sendBulkMessages(recipients, message);
