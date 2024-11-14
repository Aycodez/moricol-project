const StartNowButton = ({ onClick }: { onClick: () => void }) => (
  <button
    className="w-full bg-[#F2A900] text-white py-2 rounded-md mt-4 hover:bg-[#D99200] transition-colors"
    onClick={onClick}
  >
    Start Now!
  </button>
)
export default StartNowButton