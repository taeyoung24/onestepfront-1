import './App.css'

type DateFrameProps = {
    date?: number;
    color?: string;
    contents?: React.ReactNode;
  }

function DateFrame({ date, color, contents}: DateFrameProps) {
  return (
    <div className='date-frame'>
      <p style={{color}}>{date}</p>
      <div className='contents-frame'>{contents}</div>
    </div>
  )
}

function App() {
  return (
    <>
      <div className='background'>
        <div className='calendar-container'>
          <div className='grid'>
            <DateFrame date={28} color='#E5E5E5' contents />
            <DateFrame date={29} color='#E5E5E5' contents />
            <DateFrame date={30} color='#E5E5E5' contents />
            <DateFrame date={1} color='#262626' contents />
            <DateFrame date={2} color='#262626' contents />
            <DateFrame date={3} color='#262626' contents />
            <DateFrame date={4} color='#262626' contents />
            <DateFrame date={5} color='#262626' contents />
            <DateFrame date={6} color='#262626' contents />
            <DateFrame date={7} color='#262626' contents />
            <DateFrame date={8} color='#262626' contents />
            <DateFrame date={9} color='#262626' contents />
            <DateFrame date={10} color='#262626' contents />
            <DateFrame date={11} color='#262626' contents />
            <DateFrame date={12} color='#262626' contents />
            <DateFrame date={13} color='#262626' contents />
            <DateFrame date={14} color='#262626' contents />
            <DateFrame date={15} color='#262626' contents />
            <DateFrame date={16} color='#262626' contents />
            <DateFrame date={17} color='#262626' contents />
            <DateFrame date={18} color='#262626' contents />
            <DateFrame date={19} color='#262626' contents />
            <DateFrame date={20} color='#262626' contents />
            <DateFrame date={21} color='#262626' contents />
            <DateFrame date={22} color='#262626' contents />
            <DateFrame date={23} color='#262626' contents />
            <DateFrame date={24} color='#262626' contents />
            <DateFrame date={25} color='#262626' contents />
            <DateFrame date={26} color='#262626' contents />
            <DateFrame date={27} color='#262626' contents />
            <DateFrame date={28} color='#262626' contents />
            <DateFrame date={29} color='#262626' contents />
            <DateFrame date={30} color='#262626' contents />
            <DateFrame date={31} color='#262626' contents />
            <DateFrame date={1} color='#E5E5E5' contents />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
