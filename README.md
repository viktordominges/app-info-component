# app-info-component

Explanation:
Imports: The code starts by importing the necessary CSS styles for the AppInfo component. This helps in keeping the styles modular and specific to the component.

AppInfo Functional Component: This is a stateless functional component designed to display key pieces of information about the employees.

Component Props: The component takes two props:

employees: The total number of employees.
increased: The number of employees who have been awarded.
JSX Return:

<div className="app-info">: A container div with a class name for styling purposes.
<h1>: A main header indicating the purpose of the component, which is employee payroll accounting.
<h2> (Total number of employees): This element dynamically displays the total number of employees using the employees prop.
<h2> (Number of awarded employees): This element dynamically displays the number of employees who have received awards using the increased prop.
Export: The component is exported as the default export, making it easy to import into other files where it is needed. This maintains modularity and reusability of the component.
