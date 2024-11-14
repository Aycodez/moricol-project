"use client"
import { useState } from "react"
import SelectPlan from "./select-plan"
import MembersList from "./members-list"
export default function Organization() {
  const [showMembersList, setShowMembersList] = useState(false)
  const toggleMembersList = () => {
    setShowMembersList(!showMembersList)
  }
  return (
    <div>
      {showMembersList ? (
        <MembersList />
      ) : (
        <SelectPlan toggleMembersList={toggleMembersList} />
      )}
    </div>
  )
}