import './app-info.css'; // Import CSS styles for the AppInfo component

// Define the AppInfo functional component
const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Employee payroll accounting</h1> {/* Main header for the component */}
            <h2>Total number of employees: {employees}</h2> {/* Display total number of employees */}
            <h2>Number of awarded employees: {increased}</h2> {/* Display number of employees with awards */}
        </div>
    );
}

export default AppInfo; // Export the AppInfo component as the default export
