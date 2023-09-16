Here i give the explanation :: 

Course Selection and Management:
  - Users can easily browse and select computer courses from the available list.
  - The application provides a user-friendly interface for managing selected courses.
  - Real-time updates on remaining hours and total cost keep users informed.

Error Notifications with `react-toastify`:
  - Utilizes the `react-toastify` library to provide user-friendly error notifications.
  - Notifications are triggered when users attempt to:
    - Select a course that is already in their cart.
    - Exceed the available hours for course selection.
  - Enhances the overall user experience by providing informative feedback.

Efficient Data Loading with `useEffect`:
  - Utilizes the `useEffect` hook to asynchronously load course data from a JSON file.
  - Ensures that users always have access to up-to-date course information.
  - Leveraging React's efficient rendering and updating mechanism for optimal  performance.


   How i manage the state in my assignment project

 1. Import useState:

Import the useState hook from React at the top of component file.

 2. Define State Variables:

Define state variables in  functional component for the pieces of data we need to manage. For example, we mentioned that we need to track selected courses, remaining hours, and total cost. We can define them like this:

const [selectedCourses, setSelectedCourses] = useState([]);
const [remainingHours, setRemainingHours] = useState(20);
const [totalCost, setTotalCost] = useState(0);
 
 Here,
selectedCourses: An array to hold the selected courses.
remainingHours: A variable to keep track of the remaining hours.
totalCost: A variable to calculate and store the total cost of selected courses.

3. Update State:

When a user selects or deselects a course or when other relevant events occur, use the setXXX functions (e.g., setSelectedCourses, setRemainingHours, setTotalCost) to update the state variables.

For example, when a user selects a course, you can update the selectedCourses array:

const handleCourseSelection = (course) => {
  // Add the selected course to the array
  setSelectedCourses([...selectedCourses, course]);

  // Update remaining hours and total cost
  const newRemainingHours = remainingHours - course.Credit;
  setRemainingHours(newRemainingHours);
  setTotalCost(totalCost + parseFloat(course.Price));
};

4. Render State Data:

In JSX, we can display the state data using curly braces {} to include them in component's rendering. For example, to display the remaining hours and total cost:
<div>
  <p>Remaining Hours: {remainingHours}</p>
  <p>Total Cost: ${totalCost.toFixed(2)}</p>
</div>
This will display the current values of remainingHours and totalCost in your component.



