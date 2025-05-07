import classNames from "classnames";
import { FaCheck, FaXmark } from "react-icons/fa6";
import './App.css'

type TaskState = 'completed' | 'cancelled' | 'in-progress';
type TaskCategory = '25-diode' | 'university' | 'self-study' | 'self-care' | 'welfare' | 'other';

interface TaskContainerProps {
  title: string;
  description?: string;
  extraInfo?: string;
  state?: TaskState;
  category?: TaskCategory;
}

export const TaskContainer = ({
  title,
  description = '',
  extraInfo = '',
  state = 'in-progress',
  category = 'other'
}: TaskContainerProps) => {
  let handleClassName = "handle";
  let iconContainerClassName = "icon-container";
  let extraInfoClassName = "task-extras";
  let icon;
  let primaryColorStyle = "";
  let secondaryColorStyle = "";
  const colorPrimaryMap = {
    '25-diode': '#5833ff',
    'university': '#d8ad5e',
    'self-study': '#f0588b',
    'self-care': '#f0588b',
    'welfare': '#f0588b',
    'other': '#525252'
  };
  const colorSecondaryMap = {
    '25-diode': '#5833ff36',
    'university': '#d8ad5e36',
    'self-study': '#f0588b36',
    'self-care': '#f0588b36',
    'welfare': '#f0588b36',
    'other': '#52525236'
  };

  if (state === 'completed') {
    handleClassName = classNames("handle", "handle--completed");  
    iconContainerClassName = classNames("icon-container", "icon-container--completed");
    extraInfoClassName = classNames("task-extras", "task-extras--completed");
    icon = <FaCheck size="24px" color="white" />
  } else if (state === 'cancelled') {
    handleClassName = classNames("handle", "handle--cancelled");
    iconContainerClassName = classNames("icon-container", "icon-container--cancelled");
    extraInfoClassName = classNames("task-extras", "task-extras--cancelled");
    icon = <FaXmark size="24px" color="white" />
  } else {
    icon = <FaCheck size="24px" color="#4e4cdd" />
    primaryColorStyle=`background-color: ${colorPrimaryMap[category]}; color: ${colorPrimaryMap[category]};`;
    secondaryColorStyle=`background-color: ${colorSecondaryMap[category]}; color: ${colorSecondaryMap[category]};`;
  }

  return (
    <div className={classNames("task-container", {
      "task-container--completed": state === 'completed',
      "task-container--cancelled": state === 'cancelled',
      "task-container--in-progress": state === 'in-progress'})}>
      <div className={handleClassName} />
      <div className="card-body">
        <div className={iconContainerClassName}>
          {icon}
        </div>
        <div className="inner-body">
          <div className="upper">
            <h1 className="task-title">{title}</h1>
            <p className="task-description">{description}</p>
          </div>
          <div className="lower">
            <p className={extraInfoClassName}>{extraInfo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


function App() {

  const tasks: TaskContainerProps[] = [
    {
      title: "Prep 19 - from 평가",
      description: "⌜동사 전치사 도감⌟ 30주차 마스터",
      category: "self-study",
      state: "completed",
      extraInfo: "2025년 5월 7일 (수)"
    },
    {
      title: "관계의기술",
      description: "5th Semester",
      category: "university",
      state: "completed",
      extraInfo: "2025년 5월 5일 (월)"
    },
    {
      title: "어린이날/부처님 오신 날",
      description: "2025 휴일",
      category: "welfare",
      state: "completed",
      extraInfo: "2025년 5월 5일 (월)"
    },
    {
      title: "Daily Listening for Wed",
      description: "Unlock 10 Playlist",
      category: "self-study",
      state: "completed",
      extraInfo: "2025년 5월 7일 (수)"
    },
    {
      title: "One-step - Week 3",
      description: "One-step Front",
      category: "self-study",
      state: "in-progress",
      extraInfo: "2025년 5월 7일 (수)"
    },
    {
      title: "5월 2주차 업무 결산",
      description: "DIODE 25Q2 Administration",
      category: "25-diode",
      state: "in-progress",
      extraInfo: "2025년 5월 9일 (금)"
    },
    {
      title: "일일웨이트 코어 및 하체 1H",
      description: "Daily Weight Training",
      category: "self-care",
      state: "cancelled",
      extraInfo: "취소됨"
    }
  ];

  return (
    <>
      <div className="tasks">
        {tasks.map((task) => (
            <TaskContainer
              title={task.title}
              description={task.description}
              extraInfo={task.extraInfo}
              state={task.state}
              category={task.category}
            />
        ))}
      </div>
    </>
  )
}

export default App
