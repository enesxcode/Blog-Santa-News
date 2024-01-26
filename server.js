// const express = require('express');
// const axios = require('axios'); // You may need to install this package using npm install axios
// const app = express();
// const port = 3000;

// // Middleware to parse JSON in request body
// app.use(express.json());

// // Endpoint to fetch news
// app.get('/api/news', async (req, res) => {
//   try {
//     const apiKey = '4d805a82-94b0-4ae9-8d88-aa5b350780a5'; // Replace 'your_api_key' with your actual API key
//     const apiEndpoint = 'http://eventregistry.org/api/v1/article/getArticles'; // Replace with the actual API endpoint

//     // Make a request to the news API with the provided API key
//     const response = await axios.get(apiEndpoint, {
//       headers: {
//         'Authorization': `Bearer ${apiKey}`,
//         // Add other headers if required by the API
//       },
//     });

//     // Send the news data received from the API as the response
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error fetching news:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });




// app.use(express.static(__dirname));

// app.get('/', (req, res) => {
//     page = fs.readFileSync('index.html', 'utf8');
//     res.send(page);
// });

// app.get('/about', (req, res) => {
//     page = fs.readFileSync('about.html', 'utf8');
//     res.send(page);
// });

// app.get('/contact', (req, res) => {
//     page = fs.readFileSync('contact.html', 'utf8');
//     res.send(page);
// });

// // Handle 404 - Page Not Found
// app.use((req, res) => {
//     res.status(404).send('Page not found');
// });


// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });










const express = require('express');
const axios = require('axios');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint to fetch news
app.get('/api/news', async (req, res) => {
  try {
    const apiKey = '1ae4d06cacd240f8a7d70bbc5f4df629'; 
    const apiEndpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`; 

    // Set parameters for the News API request
    const params = {
      category: 'options:',
      language: 'en', 
      pageSize: 5, 
    };

    // Make a request to the News API with the provided parameters
    const response = await axios.get(apiEndpoint, { params });

    // Send the news data received from the API as the response
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serve static files
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    page = fs.readFileSync('index.html', 'utf8');
    res.send(page);
});

app.get('/about', (req, res) => {
    page = fs.readFileSync('about.html', 'utf8');
    res.send(page);
});

app.get('/contact', (req, res) => {
    page = fs.readFileSync('contact.html', 'utf8');
    res.send(page);
});

app.get('/football', (req, res) => {
   page = fs.readFileSync(path.join(__dirname, 'html only', 'football.html'));
   res.send(page);
})

// Handle 404 - Page Not Found
app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

