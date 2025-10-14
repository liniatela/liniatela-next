'use client'

import Image from 'next/image'
import { IProblem, MOCK_PROBLEMS_DATA } from './constants'

const Problems = () => {
  return (
    <section className='problems overflow-hidden select-none'>
      <div className='rounded-4xl pt-30 sm:pt-50'>
        <div className='container'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6'>
            {/* Левая карточка с изображением */}
            <article className='relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-[600px] group'>
              <div className='relative h-full z-10 md:py-10 md:px-8 py-6 px-4  flex flex-col justify-between'>
                <h2
                  className='text-3xl leading-none tracking-tighter text-balance text-white [&>span]:text-[#B8ACA6] max-w-[340px]'

                  dangerouslySetInnerHTML={{
                    __html: typeof MOCK_PROBLEMS_DATA.title === 'string' ? MOCK_PROBLEMS_DATA.title : ''
                  }}
                />
                <div className='mt-auto max-w-[400px]'>
                  <h3 className='text-xl text-white leading-none tracking-tighter'>
                    {MOCK_PROBLEMS_DATA.problems[0].title}
                  </h3>
                  <div className='border-b my-4 border-white w-[60px]' />
                  <p className='text-white leading-none tracking-tighter '>
                    {MOCK_PROBLEMS_DATA.problems[0].description}
                  </p>
                </div>
              </div>

              {/* Изображение с затемнением */}
              <div className='absolute inset-0'>
                <Image
                  className='object-cover w-full h-full'
                  src={MOCK_PROBLEMS_DATA.image}
                  fill
                  sizes='(max-width: 1024px) 100vw, 50vw'
                  alt=''
                  priority
                />
                <div
                  className='absolute inset-0 bg-gradient-to-r from-black/80  to-black/10'
                  aria-hidden='true'
                />
              </div>
            </article>

            {/* Правая сторона с карточками проблем */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
              {MOCK_PROBLEMS_DATA.problems.slice(1).map(problem => (
                <ProblemCard key={problem.id} problem={problem} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problems

const ProblemCard = ({ problem }: { problem: IProblem }) => {
  return (
    <article className='bg-gray-50 rounded-3xl p-6 xl:p-8 min-h-[200px] md:min-h-[240px] hover:bg-gray-100 transition-colors text-center grid place-content-center'>
      <h3 className='text-xl font-medium text-gray-900 leading-none tracking-tighter'>
        {problem.title}
      </h3>
      <div className='border-b my-4 border-[#7C7C7C] w-[60px] mx-auto' />
      <p className='text-[#7C7C7C] leading-tight tracking-tighter'>
        {problem.description}
      </p>
    </article>
  )
}