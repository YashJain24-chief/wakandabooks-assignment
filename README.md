# 📱 Offline-First React Native App with RxDB + CouchDB Sync

This project is a React Native offline-first CRUD app that allows users to create and manage **Businesses** and **Articles**. The app uses **RxDB + SQLite** for local storage and automatically syncs with a **CouchDB** server when the device is online.

---

## 🚀 Features

- ✅ Create and view Businesses
- ✅ Create and view Articles linked to a Business
- ✅ Offline-first functionality using RxDB (with SQLite adapter)
- ✅ Automatic bi-directional sync with CouchDB when online
- ✅ Data persistence across sessions

---

## 📦 Tech Stack

- React Native (TypeScript)
- RxDB + SQLite
- CouchDB (Sync target)
- Redux Toolkit (for UI state)
- React Navigation

---

## 📁Folder Structure

![Capture](https://github.com/user-attachments/assets/467a9ce7-fc6c-4e3e-85ae-02e51bd640b6)

## ⚙️ How to Run the Project

### 1. Clone the Repo

```bash
git clone https://github.com/YashJain24-chief/wakandabooks-assignment.git
cd wakandabooks-assignment
```

### 2. Install Dependencies

```
npm install
```

### 3. Start the Metro Bundler

```
npm start
```

### 4. Run on Android or iOS

```
npx react-native run-android

# or

npx react-native run-ios
```

## 🌐 How CouchDB sync is configured and used.

This app supports automatic replication between local RxDB and a remote CouchDB server.

### 🔧 Remote CouchDB Setup

Install CouchDB locally or use a cloud provider like IBM Cloudant

Create two databases:

```
businesses

articles
```

Enable CORS:

```
Origins: *

Headers: Accept, Content-Type, Origin, Authorization

Methods: GET, PUT, POST, DELETE, OPTIONS
```

🔐 Example CouchDB Sync URL (with basic auth)

```
const couchURL = 'http://admin:yourpassword@localhost:5984';

replicateCouchDB({
  collection: db.businesses,
  url: `${couchURL}/businesses`,
  live: true,
  retry: true,
});
```

### Make sure your phone and computer are on the same Wi-Fi network when testing on a real device.

## 📡 How CouchDB Sync Works

```
1. When the app detects an internet connection (using @react-native-community/netinfo), it starts RxDB replication.

2. Replication pushes/pulls data to/from CouchDB for each collection (businesses and articles).
```

## 📴 How Offline Functionality is Handled

```
1. The entire app runs on local RxDB with SQLite, so it works seamlessly offline.

2. All CRUD operations (Create, Read, Update, Delete) are stored locally.

3. When the device regains internet access, the data is automatically synced to CouchDB.
```

### 📴Short demo video

https://github.com/user-attachments/assets/ce6e639d-82aa-4837-9b74-8ccb0fcd5590

### 📤APK

https://expo.dev/accounts/chiefyash/projects/wakandabooks-assignment/builds/cc976a11-0ff4-46f0-8241-43970a6babbc
