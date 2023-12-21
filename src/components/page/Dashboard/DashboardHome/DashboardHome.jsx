import CreateTask from "../CreateTask/CreateTask";
import ToDoList from "../ToDoList/ToDoList";

const DashboardHome = () => {
    return (
        <div>
            <CreateTask></CreateTask>
            <ToDoList></ToDoList>
        </div>
    );
};

export default DashboardHome;