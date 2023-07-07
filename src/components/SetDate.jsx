const SetDate = ({ date, parent }) => {
  const year = date?.substring(0, 4);
  let month = date?.substring(5, 7);
  const day = date?.substring(8);
  switch (month) {
    case "01":
      month = "Jan";
      break;
    case "02":
      month = "Feb";
      break;
    case "03":
      month = "Mar";
      break;
    case "04":
      month = "Apr";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "Jun";
      break;
    case "07":
      month = "Jul";
      break;
    case "08":
      month = "Aug";
      break;
    case "09":
      month = "Sep";
      break;
    case "10":
      month = "Oct";
      break;
    case "11":
      month = "Nov";
      break;
    case "12":
      month = "Dec";
      break;
  }

  return (
    <>
      {
        (parent == "postCard" ? (
          <p className="font-sans text-s font-thin text-neutral-600 mt-1">
            {month + " " + day + ", " + year}
          </p>
        ) : (
          <p className="text-center font-sans text-s text-neutral-600">
            {month + " " + day + ", " + year}
          </p>
        ))
      }
    </>
  );
};

export default SetDate;
