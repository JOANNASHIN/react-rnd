import CalendarBox from '@/components/elements/calendarBox';

const Monthly: React.FC = () => {
  const test = 30;

  return (
    <>
      {
        [...Array(test)].map((date: number, index: number) => {
          return <CalendarBox
            key={`date${date}`}
            date={index + 1}
          />
        })

      }
    </>
  )
}

export default Monthly;