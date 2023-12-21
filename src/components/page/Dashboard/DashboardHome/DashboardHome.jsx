import CreateTask from "../CreateTask/CreateTask";
import DashboardBanner from "../DashboardBanner/DashboardBanner";
import ToDoList from "../ToDoList/ToDoList";

const DashboardHome = () => {
    return (
        <div>
            <DashboardBanner></DashboardBanner>
            <CreateTask></CreateTask>
            <ToDoList></ToDoList>
        </div>
    );
};

export default DashboardHome;