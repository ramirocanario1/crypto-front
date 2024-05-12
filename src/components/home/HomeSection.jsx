
export default function HomeSection({title, description, children}) {
    return (
      <section className='bg-gray-700 py-2 text-white flex flex-col gap-1'>
        <h2 className='text-xl font-semibold text-white ml-2'>{title}</h2>
        <p className="text-gray-300 ml-3 mt-1">{description}</p>
        {children}
      </section>
    )
  }