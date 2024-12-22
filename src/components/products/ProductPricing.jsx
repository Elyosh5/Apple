import { Tab, Tabs } from "@mui/material";
import React from "react";

export default function ProductPricing() {
  return (
    <Tabs value={0}>
        <Tab>All</Tab>
        <Tab>Highest price</Tab>
        <Tab>Lowest price</Tab>
    </Tabs>
  );
}
