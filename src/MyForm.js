import React, { useState, useContext } from 'react';
import { firestore, auth } from './firebase';
import { collection, addDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    date: '',
    money: '',
    image: null,
    document: null
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleUpload = async (file) => {
    const user = auth.currentUser;
    if (!user) {
      throw new Error('User is not authenticated. Cannot upload file.');
    }
  
    const storage = getStorage();
    // Path in the format: 'uploads/{uid}/{filename}'
    const storageRef = ref(storage, `uploads/${user.uid}/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      alert('You must be logged in to submit this form.');
      return;
    }
    try {
      const image = formData.image ? await handleUpload(formData.image) : null;
      const document = formData.document ? await handleUpload(formData.document) : null;
      await addDoc(collection(firestore, "applications"), {
        ...formData,
        image,
        document,
        uid: user.uid // Include the user's UID
      });
      alert('Data sent successfully');
      setFormData({ name: '', age: '', date: '', money: '', image: null, document: null });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        type="number"
        name="money"
        placeholder="Amount"
        value={formData.money}
        onChange={handleChange}
      />
      <input
        type="file"
        name="image"
        onChange={handleChange}
      />
      <input
        type="file"
        name="document"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
