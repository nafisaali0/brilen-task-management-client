import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import ShowTask from "./ShowTask";

const ToDoList = () => {
    const { user } = useContext(AuthContext)
    const [tasks, setTaskList] = useState([])
    const [changeTask, setchangeTask] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/tasks?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setTaskList(data),
                    setchangeTask(data)
            })
    }, [user?.email])
    console.log(changeTask)
    return (
        <>
            <div className="container mx-auto my-5">
                <div className='text-3xl font-bold my-5'>
                    <h2 >Your Task</h2>
                    <span className='text-lg font-bold'>After Create Task Do Refresh</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-24">
                    <div>
                        <div>
                            <h1 className="text-[#8C52FF] text-3xl font-bold">ToDo</h1>
                        </div>
                        <div className="my-5 grid grid-cols-1 gap-4">
                            {
                                changeTask.map(eachTask =>
                                    <ShowTask
                                        key={eachTask._id}
                                        eachTask={eachTask}
                                        tasks={tasks}
                                        setchangeTask={setchangeTask}>
                                    </ShowTask>
                                )
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="text-[#8C52FF] text-3xl font-bold">Ongoing</h1>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="text-[#8C52FF] text-3xl font-bold">Completed</h1>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ToDoList;