import { useForm } from "react-hook-form";

const CreateTask = () => {
    const { register, handleSubmit } = useForm();//from react hook
    const onSubmit = (data) => {
        // console.log(data, user?.email)
        console.log(data)

    }
    return (
        <>
            <div className="mt-36 mb-20">
                <div className="max-w-xl mx-auto bg-gray-100  p-5 rounded-xl shadow-md">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-5">
                            <input type="name" {...register("title")} placeholder="Task Title" className="shadow-sm bg-gray-100 border  text-gray-900 text-sm rounded-lg block w-full p-2.5" ></input>
                        </div>
                        <div className="mb-5">
                            <textarea type="text" {...register("Task")} placeholder="Write Your task" className="shadow-sm bg-gray-100  text-gray-900 text-sm rounded-lg  block w-full p-2.5" required></textarea>
                        </div>
                        <button type="submit" className="text-white bg-[#8C52FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">CREATE</button>
                    </form>
                </div>

            </div>
        </>
    );
};

export default CreateTask;