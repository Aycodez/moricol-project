const NoJobsFound: React.FC = () => {
    return (
       <div className="flex items-center justify-center p-4 bg-yellow-100 border border-yellow-300 rounded">
          <p className="text-yellow-800 text-2xl text-center">
            No job listings available at the moment.<br/> Please check back later!
          </p>
        </div>
    );
};

export default NoJobsFound;
