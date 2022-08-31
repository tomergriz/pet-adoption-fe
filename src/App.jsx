import { useState } from "react";
import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Box, Flex } from "@chakra-ui/react";
import UserContextProvider from "../context/UserContext";
import MenuBar from "../components/NavBar/MenuBar";
import HomePage from "../Pages/HomePage";
import SearchPage from "../Pages/SearchPage";
import ProfilePage from "../Pages/ProfilePage";
import Dashboard from "../Pages/AdminPages/DashboardPage";
import AddPetPage from "../Pages/AdminPages/AddPetPage";
import Page404 from "../Pages/Page404";
import PrivateRoute from "../components/PrivateRoute";
import UnauthorisedPage from "../Pages/UnauthorisedPage "

function App() {
    const baseUrl = "http://localhost:8080";

    return (
        <>
            <UserContextProvider>
                <MenuBar />
                <Box>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/search" element={<SearchPage />} />

                        <Route
                            path="/profile"
                            element={
                                <PrivateRoute>
                                    <ProfilePage />
                                </PrivateRoute>
                            }
                        />

                        <Route path="/Dashboard" element={<Dashboard />} />
                        <Route path="/AddPetPage" element={<AddPetPage />} />
                        <Route path="/Unuthorised" element={<UnauthorisedPage />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Box>
            </UserContextProvider>
            {/* { <Heading as="h1" color="brand.color3">Hello world!</Heading>} */}
        </>
    );
}

export default App;
