import React from 'react'

type IdeasProps ={
  ideaname : string,
  name: string,
  date: Date,
  description: string,
}

const IdeasComponents = ({ ideaname, name, date, description }: IdeasProps) => {
  return (
    <div className='bg-white p-7 mt-6 border rounded-lg border-gray-100 shadow-md mb-4'>
      <h2 className='text-lg font-semibold'>{ideaname}</h2>
      <p className='text-sm text-purple-600 font-semibold'>For {name}</p>
      <p className='text-sm text-gray-500'>{date.toDateString()}</p>
      <p className='mt-2 text-gray-700'>{description}</p>
    </div>
  )
}
const Ideas = ({}) => {
  return (
    <div className='mt-5'>
      <h1 className='font-semibold text-2xl'>Ideas to Explore</h1>
      <IdeasComponents 
        ideaname="Personalized Mug"
        name="Adesuwa"
        date={new Date(2025, 6, 20)}
        description="A custom mug with a special message or photo."
      />
      <IdeasComponents 
        ideaname="A plaque"
        name="Temi"
        date={new Date(2025, 6, 20)}
        description="A custom plague celebarrying his achievements "
      />
      <IdeasComponents 
        ideaname="Perfume"
        name="Marvellous"
        date={new Date(2025, 6, 20)}
        description="A custom perfume with her name "
      />
      <IdeasComponents 
        ideaname="Fvaorite cake"
        name="Mosun"
        date={new Date(2025, 6, 20)}
        description="A chcocolate cake with her name on it with butter cream"
      />
      <IdeasComponents 
        ideaname="Personalized Card"
        name="Nae"
        date={new Date(2025, 6, 20)}
        description="A custom made card with her name on it wishing her a happy birthday."
      />
    </div>
  )
}

export default Ideas