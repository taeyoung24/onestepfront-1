import { FaBook, FaRegCalendarPlus, FaRegCalendarCheck } from "react-icons/fa";

type AllowedCategoryNames =
  | '25-diode'
  | 'university'
  | 'self-care'
  | 'welfare'
  | 'collaboration'
  | 'self-study'
  | '24-diode'
  | 'side-task';

interface CardBodyProps {
  categoryName: AllowedCategoryNames;
  projectName: string;
  addedDate: string;
  deadlineDate: string;
  progressPercentage: number; // 퍼센티지 값을 숫자로 받음
  lastUpdated: string;
  profileIcon?: React.ReactNode; // 아이콘을 prop으로 받을 수 있도록 옵셔널 처리
  addedIcon?: React.ReactNode;
  deadlineIcon?: React.ReactNode;
}

function CardBody({
  categoryName: teamName,
  projectName,
  addedDate,
  deadlineDate,
  progressPercentage,
  lastUpdated,
  profileIcon = <FaBook size="100%" color="white" />, // 기본값 설정
  addedIcon = <FaRegCalendarPlus color="gray"/>,
  deadlineIcon = <FaRegCalendarCheck color="gray"/>
}: CardBodyProps) {
  const barStyle = {
    width: `${progressPercentage}%` // 인라인 스타일로 너비 적용
  };

  return (
    <div className="card-body">
      <div className="upper-container">
        <div className="head-container">
          <div className="profile">
            {profileIcon}
          </div>
          <div className="head">
            <h6>{teamName}</h6>
            <h4>{projectName}</h4>
          </div>
          <div className="option"></div>
        </div>
        <div className="info-container">
          <div className="info">
            {addedIcon}
            <p className="key">Added:</p>
            <p className="value">{addedDate}</p>
          </div>
          <div className="info">
            {deadlineIcon}
            <p className="key">Deadline:</p>
            <p className="value">{deadlineDate}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="lower-container">
        <div className="loading-container">
          <div className="progressbar">
            <div className="background">
              {/* 퍼센티지 값을 스타일로 직접 적용 */}
              <div className="bar" style={barStyle}></div>
            </div>
          </div>
          {/* 퍼센티지 값을 표시 */}
          <p className='loading-percentage'>{progressPercentage}%</p>
        </div>
        <div className="label-container">
          <p className="key">Last Updated: </p>
          <p className="value">{lastUpdated}</p>
        </div>
      </div>
    </div>
  );
}

export default CardBody;
