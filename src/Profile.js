import React, { useState, useEffect } from "react";
import { firestore } from "./firebase";

const Profile = ({ user }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const profileRef = firestore.collection("profiles").doc(user.uid);

    const unsubscribe = profileRef.onSnapshot((doc) => {
      if (doc.exists) {
        setProfile(doc.data());
      } else {
        console.log("No such document!");
      }
    });

    return unsubscribe;
  }, [user.uid]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Biography: {profile.biography}</p>
      <p>Country of residence: {profile.country}</p>
      <p>Interests: {profile.interests.join(", ")}</p>
      <img src={profile.photo} alt="Profile Thumbnail" />
    </div>
  );
};

export default Profile;
