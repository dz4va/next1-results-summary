import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-hanken">
      <div className="flex min-h-screen items-center justify-center">
        <div className="border-solid bg-gradient-to-b from-light-slate-blue to-light-royal-blue rounded-3xl p-24">
          <h1 className="text-4xl font-bold text-slate-100">Your Result</h1>
        </div>
        <div className="border-solid border-red-300 border-2">
          <h1 className="text-4xl font-bold">Hello World</h1>
        </div>
      </div>
    </main>
  )
}
