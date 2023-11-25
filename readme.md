# Build My Rig Server

Welcome to the Build My Rig server repository! This server is built using Express and MongoDB.

## Technologies Used

- [Express](https://expressjs.com/): A web application framework for Node.js.
- [MongoDB](https://www.mongodb.com/): A NoSQL database.

## Environment Variables

Make sure to create a `.env` file in the root of your project with the following variables:

```env
GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret

GOOGLE_ID=your_google_id
GOOGLE_SECRET=your_google_secret

NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000/

MD_USER=your_mongo_user
MD_PASS=your_mongo_password


git clone https://github.com/your-username/build-my-rig-server.git
cd build-my-rig-server

npm install
npm start
