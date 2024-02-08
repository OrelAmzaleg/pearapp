import React, { useState, useEffect } from 'react';
import { firestore } from './firebase';
import { collection, query, where, getDocs } from "firebase/firestore";

const AgeFilteredUsersList = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const applicationsRef = collection(firestore, "applications");
        const q = query(applicationsRef, where("age", ">=", "32"));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          console.log("No records found with age");
          return;
        }

        const recordsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRecords(recordsArray);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div>
      <h2>Records with Age </h2>
      <ul>
        {records.map(record => (
          <li key={record.id}>ID: {record.id}, Data: {JSON.stringify(record)}</li>
        ))}
      </ul>
    </div>
  );
};

export default AgeFilteredUsersList;
