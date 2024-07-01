const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]
  
  export default function Stats() {
    return (
     
        <div className="mx-auto max-w-full px-2 lg:px-2">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-100">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-400 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
   
      </div>
    )
  }
  