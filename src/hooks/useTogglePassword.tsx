"use client";

import { useState } from "react";

export const useTogglePassword = () => {
  const [isVisible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!isVisible);
  };

  return { isVisible, toggleVisibility };
};
