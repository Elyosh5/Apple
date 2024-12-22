import React from "react";
import { IconButton } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate } from "react-router-dom";
const AdminPanel = () => {
  const navigate = useNavigate();
  return (
    <IconButton onClick={() => navigate("/admin")}>
      <AdminPanelSettingsIcon sx={{ color: "#000", fontSize: "20px" }} />
    </IconButton>
  );
};

export default AdminPanel;
