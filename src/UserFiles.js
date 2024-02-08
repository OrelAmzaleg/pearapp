import React, { useState, useEffect } from 'react';
import { auth, storage } from './firebase';
import { ref, listAll, getDownloadURL } from "firebase/storage";

const UserFiles = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const user = auth.currentUser;

      if (!user) {
        console.log("No user is signed in.");
        return;
      }

      try {
        const storageRef = ref(storage, `uploads/${user.uid}`);
        const result = await listAll(storageRef);

        const fileUrls = await Promise.all(
          result.items.map((itemRef) => getDownloadURL(itemRef))
        );

        setFiles(fileUrls);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h2>Your Files</h2>
      {files.length > 0 ? (
        <ul>
          {files.map((url, index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">File {index + 1}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No files found.</p>
      )}
    </div>
  );
};

export default UserFiles;
