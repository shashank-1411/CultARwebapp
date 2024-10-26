
﻿
CultAR: Time Machine for Indian Art 🎨
Show Image
Show Image
Show Image
CultAR is an innovative web application designed to preserve and showcase India's rich cultural heritage through AI technology. Built for Mumbai Hacks, this project combines artificial intelligence with augmented reality to bring historical artworks to life.
Show Image![Home Page](https://github.com/user-attachments/assets/51b84912-620d-4932-8623-56f8e04211d0)

![Upload](https://github.com/user-attachments/assets/e6fdb9a6-31cc-4746-92df-3aaf61fba272)

🌟 Features

AI-Powered Image Restoration: Restore old or damaged artwork using advanced AI algorithms
Augmented Reality Viewing: Experience restored artworks in AR
Cultural Preservation: Contribute to preserving India's artistic heritage
User-Friendly Interface: Intuitive upload and viewing experience
Responsive Design: Works seamlessly across all devices

🚀 Tech Stack

Frontend

Next.js 13
TypeScript
Tailwind CSS
React Three Fiber (for AR)


Backend

Node.js
Express
TensorFlow (for AI restoration)


Infrastructure

Vercel (deployment)
MongoDB (database)



📋 Prerequisites
Before you begin, ensure you have the following installed:

Node.js 16.x or higher
npm or yarn
Git

🛠️ Installation

Clone the repository

bashCopygit clone https://github.com/yourusername/cultar.git
cd cultar

Install dependencies

bashCopynpm install
# or
yarn install

Set up environment variables

bashCopycp .env.example .env.local
Edit .env.local with your configuration:
CopyNEXT_PUBLIC_API_URL=your_api_url
MONGODB_URI=your_mongodb_uri

Run the development server

bashCopynpm run dev
# or
yarn dev

Open http://localhost:3000 in your browser

🎯 Project Structure
Copycultar/
├── src/
│   ├── api/
│   │   └── restoration.ts
│   ├── components/
│   │   ├── Layout/
│   │   │   └── Navbar.tsx
│   │   └── ImageUpload/
│   │       └── ImageUpload.tsx
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── about.tsx
│   │   ├── upload.tsx
│   │   └── ar-view.tsx
│   └── types/
│       └── index.ts
├── public/
│   └── assets/
├── styles/
│   └── globals.css
└── package.json
🔧 Configuration
Environment Variables
VariableDescriptionNEXT_PUBLIC_API_URLBackend API URLMONGODB_URIMongoDB connection stringAI_MODEL_PATHPath to AI model files
API Endpoints
EndpointMethodDescription/api/restorePOSTUpload and restore artwork/api/ar/viewGETGet AR view data
🖥️ Usage

Upload Artwork

Navigate to the upload page
Drop or select your image
Wait for AI restoration


View in AR

Open restored artwork
Click "View in AR"
Follow on-screen instructions



🤝 Contributing
We welcome contributions! Please follow these steps:

Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

📝 License
This project is licensed under the MIT License - see the LICENSE.md file for details.
🙏 Acknowledgments

Mumbai Hacks for the platform
AI4Bharat for dataset access
All contributors who helped in the development


 Add support for multiple art styles
 Implement batch processing
 Enhance AR features
 Add social sharing capabilities
 Integrate with museums and galleries
