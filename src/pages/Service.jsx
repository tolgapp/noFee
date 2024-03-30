import service from "/images/service.png"

const Service = () => {
  return (
    <>
    <div className='flex w-full'>
      <div className="w-1/2 place-content-center pl-12 pr-12 font-semibold bg-stone-900">
      <h2 className="text-8xl text-white">Travel ✈️, Party 🪩 or Chill 🛀🏻 and if you have problem with your bank account we are 24/7 here!</h2>
      </div>
      <article className='w-1/2'>
        <img className="" src={service} alt="24 / 7 Service" />
      </article>
    </div>
    <form action="" className="h-screen flex flex-col">
      <input type="text" name="name" id="" placeholder="Name" className="border p-3 w-1/2"/>
      <input type="text" name="fullname" id="" placeholder="Fullname" className="border p-3 w-1/2"/>
    </form>
    </>
  )
}

export default Service