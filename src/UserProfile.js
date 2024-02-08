import React, { useState, useEffect } from "react";
import { auth, firestore } from "./firebase";
import { collection, query, getDocs, where } from "firebase/firestore";

const UserProfile = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;

      if (!user) {
        console.log("No user is signed in.");
        return;
      }

      try {
        console.log("Fetching user data for UID:", user.uid);
        const applicationsRef = collection(firestore, "applications");
        const q = query(applicationsRef, where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          console.log("Fetched user data:", userData);
          setUserName(userData.name);
        } else {
          console.log("No data found for user:", user.uid);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {userName ? (
        <p>Welcome back, {userName}!</p>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserProfile;
