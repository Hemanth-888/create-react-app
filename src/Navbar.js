import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

const Navbar = ({ user }) => {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
   
