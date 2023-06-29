import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-hanken">
      <div className="flex items-center lg:flex-row sm:flex-col justify-center shadow-slate-200 shadow-lg rounded-3xl w-[700px] h-[520px]">
        <div className="flex flex-col items-center justify-center border-solid h-full bg-gradient-to-b from-light-slate-blue flex-grow to-light-royal-blue rounded-3xl w-[350px] p-8">
          <h1 className="text-2xl font-bold text-slate-100 opacity-50 text-center">Your Result</h1>
          <div className="flex flex-col items-center justify-center h-[180px] w-[180px] rounded-full bg-gradient-to-b m-auto to-persian-blue from-violet-blue">
            <h1 className="text-6xl font-bold text-slate-100 text-center">76</h1>
            <h1 className="text-sm font-bold text-center text-slate-100 opacity-50">of 100</h1>
          </div>
          <h1 className="text-2xl font-bold text-slate-100 text-center m-4">Great</h1>
          <p className="text-md font-bold text-slate-100 opacity-50 text-center m-4">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <div className="border-solid h-full rounded-3xl p-8 flex-grow w-[350px]">
          <h1 className="text-2xl font-bold text-slate-700">Summary</h1>
        </div>
      </div>
    </main>
  )
}
