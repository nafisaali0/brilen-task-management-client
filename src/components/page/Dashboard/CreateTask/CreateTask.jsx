import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const CreateTask = () => {

    const { register, handleSubmit } = useForm();//from react hook
    const { user } = useContext(AuthContext)

    const onSubmit = (data) => {
        // console.log(data, user?.email)
        console.log(data)

        const title = data.title;
        const task = data.task;
        const date = data.date;
        const owner_name = user.displayName;
        const owner_image = user.photoURL;
        const email = user.email;
        const newTask = { title, task, date, owner_name, owner_image, email }
        console.log(newTask)

        fetch('https://brilen-task-management-server.vercel.app/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Successfully Created Task'
                    )
                }
            })

    }
    return (
        <>
            <div className="mt-36 mb-20">
                <div className="max-w-xl mx-auto bg-base-200  p-5 rounded-xl shadow-md">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-5">
                            <input type="name" {...register("title")} placeholder="Task Title" className="shadow-sm bg-base-200 border  text-gray-900 text-sm rounded-lg block w-full p-2.5" ></input>
                        </div>
                        <div className="mb-5">
                            <input type="date" {...register("date")} placeholder="Date" className="shadow-sm bg-base-200 border  text-gray-900 text-sm rounded-lg block w-full p-2.5" ></input>
                        </div>
                        <div className="mb-5">
                            <textarea type="text" {...register("task")} placeholder="Write Your task" className="shadow-sm bg-base-200  text-gray-900 text-sm rounded-lg  block w-full p-2.5" required></textarea>
                        </div>
                        <button type="submit" className="text-white bg-[#8C52FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">CREATE</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateTask;