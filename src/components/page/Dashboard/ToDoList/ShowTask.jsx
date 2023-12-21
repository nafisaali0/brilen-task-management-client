import PropTypes from 'prop-types';
import { useContext } from 'react';
import Draggable from 'react-draggable';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../Providers/AuthProvider';
const ShowTask = ({ eachTask, tasks, setchangeTask }) => {
    const { register, handleSubmit } = useForm();//from react hook
    const { user } = useContext(AuthContext)
    const { _id, title, task, date } = eachTask

    const handleDelete = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brilen-task-management-server.vercel.app/tasks/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your save blog has been deleted.',
                                'success'
                            )
                            // clear state after delete wishlist's blog
                            const loadTaskAfterDelete = tasks.filter(blog => blog._id !== _id)
                            setchangeTask(loadTaskAfterDelete)
                        }

                    })
            }
        })

    }

    const onSubmit = (data) => {
        // console.log(data, user?.email)
        console.log(data)

        const title = data.title;
        const task = data.task;
        const date = data.date;
        const owner_name = user.displayName;
        const owner_image = user.photoURL;
        const email = user.email;
        const updateTask = { title, task, date, owner_name, owner_image, email }
        // console.log(newTask)

        // sent update productinfo to server
        fetch(`https://brilen-task-management-server.vercel.app/tasks/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Updated!',
                        'Your Task has been Updated.',
                        'success'
                    )
                }

            })

    }

    return (
        <>
            <Draggable
                axis="both"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[25, 25]}
                scale={1}
            >
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <span>{date}</span>
                        <h2 className="card-title">{title}</h2>
                        <p>{task}</p>
                        <div className="card-actions justify-end">
                            {/* <button className="btn bg-[#8C52FF] text-white">Edit</button> */}
                            <button className="btn text-white bg-gradient-to-r bg-[#8C52FF]" onClick={() => document.getElementById('my_modal_4').showModal()}>Edit</button>
                            <dialog id="my_modal_4" className="modal">
                                <div className="modal-box w-11/12 max-w-5xl">
                                    <div className="text-left text-3xl font-bold my-5">
                                        <h1>Edit Task</h1>
                                    </div>
                                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
                                        <div className="mb-5">
                                            <input type="name" {...register("title")} defaultValue={title} placeholder="Task Title" className="shadow-sm bg-base-200 border  text-gray-900 text-sm rounded-lg block w-full p-2.5" ></input>
                                        </div>
                                        <div className="mb-5">
                                            <input type="date" {...register("date")} placeholder="Date" defaultValue={date} className="shadow-sm bg-base-200 border  text-gray-900 text-sm rounded-lg block w-full p-2.5" ></input>
                                        </div>
                                        <div className="mb-5">
                                            <textarea type="text" {...register("task")} defaultValue={task} placeholder="Write Your task" className="shadow-sm bg-base-200  text-gray-900 text-sm rounded-lg  block w-full p-2.5"></textarea>
                                        </div>
                                        <button type="submit" className="text-white bg-[#8C52FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update</button>
                                    </form>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                            <button onClick={() => handleDelete(_id)} className="btn bg-[#8C52FF] text-white">Delete</button>
                        </div>
                    </div>
                </div>
            </Draggable>
        </>
    );
};
ShowTask.propTypes = {
    eachTask: PropTypes.obj,
    tasks: PropTypes.array,
    setchangeTask: PropTypes.func
};
export default ShowTask;



