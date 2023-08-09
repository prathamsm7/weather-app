# Weather App [Live Demo Link](https://reactaccuweatherapp.netlify.app/)

This is a simplified Weather web application built using React. It allows users to search weather of places over the globe . There are two ways to get weather of particular place .

1. By Enter Correct Place Name (atleast 3 letters)
2. User Own Location Weather (Needs to allow location permission in browser)

## Features

- Search for any particular place weather and Get own location weather

## Getting Started

Follow the instructions below to get the project up and running on your local machine.

### Prerequisites

- Node.js (v12 or higher) and npm (Node Package Manager) installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/prathamsm7/weather-app.git
```

2. Navigate to the project directory:

```bash
cd weather-app
```

3. Install the dependencies:

```bash
npm install
```

### Usage

1. Signup to https://home.openweathermap.org and Generate your own API key https://home.openweathermap.org/api_keys . After generating API key create .env folder in root folder and add VITE_APIKEY=YOUR_API_KEY

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173/` to view the application.

### API

The data is fetched from the API https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- The "Weather App" project was created as part of a coding challenge.

---

Feel free to modify the content and structure of the `README.md` file to suit your project's specific needs.
