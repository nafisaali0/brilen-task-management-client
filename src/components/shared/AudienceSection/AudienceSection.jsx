

const AudienceSection = () => {
  const targetAudience = [
    { id: 1, role: 'Developers', description: 'Stay organized with your coding tasks.' },
    { id: 2, role: 'Corporate Professionals', description: 'Manage your daily tasks and deadlines.' },
    { id: 3, role: 'Bankers', description: 'Keep track of financial tasks and priorities.' },
    // Add more roles and descriptions as needed
  ];

  return (
    <section className="my-20 p-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Who Can Benefit from This ToDo App?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudience.map((audience) => (
            <div key={audience.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{audience.role}</h3>
              <p className="text-gray-600">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
