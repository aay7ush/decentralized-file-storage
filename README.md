# Decentralized File Storage App

Welcome to our Decentralized File Storage App! This application leverages the power of blockchain technology, specifically the NEAR blockchain, to provide a secure and decentralized platform for storing, downloading, uploading, and sharing files. Users can seamlessly interact with the app using their NEAR Wallet.

## Screenshot

![App Screenshot](/public/screenshot.png)

## Live Site

Check out the live site [here](URL).

## Features

### NEAR Wallet Integration

- **Login**: Access the app securely by logging in with your NEAR Wallet.
- **Decentralized Identity**: Leverage NEAR Wallet for secure and decentralized user identity.

### File Management

- **Upload**: Easily upload files of your choice to the decentralized storage.
- **Download**: Download files from the decentralized storage to your local device.
- **Share**: Share files with others by providing secure access links.

### Fee System

- **Transaction Fees**: A certain fee is deducted from the user's NEAR Wallet on every download, upload, or sharing of files. This ensures sustainability and supports the decentralized infrastructure.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/decentralized-file-storage.git`
2. Navigate to the project directory: `cd decentralized-file-storage`
3. Install the dependencies: `npm install`
4. Download IPFS desktop application
5. Edit IPFS config file add localhost url in `Access-Control-Allow-Origin`
6. Start the development server: `npm run dev`
7. Open your web browser and visit `http://localhost:3000` (or the specified port)

Ensure that you have the required NEAR Wallet for seamless authentication.

## Technologies Used

- **Next.js**: Next.js is used as the framework for building the frontend of the application. It provides server-side rendering and a great developer experience.
- **React**: Library for building user interfaces.
- **TypeScript**: TypeScript is used to add static typing to the application, making it more robust and maintainable.
- **Tailwind CSS**: A utility-first CSS framework for designing responsive and modern user interfaces.
- **Mintbase**: Let users integrate with the NEAR blockchain
- **IPFS**: InterPlanetary File System for decentralized file storage.
- **NEAR API**: NEAR blockchain API for smart contract interaction.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push your branch to your forked repository.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
